require("dotenv").config();
const { default: mongoose } = require("mongoose");
const puppeteer = require("puppeteer");
const Shelving = require("../../api/models/shelving");
const { connectDB } = require("../../config/db");
const fs = require("fs");
const cliProgress = require("cli-progress");
const colors = require('ansi-colors');

const SHELVINGS = [];
const BASE_URL = "https://www.ikea.com/es/es/cat/estanterias-librerias-st002/?page=";
const MAX_PAGES = 30; // Definir un límite máximo de páginas para evitar bucles infinitos

const scrapp = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    let cookiesRejected = false;
    let pageNumber = 1; // Primera página
    let totalItems = 0;
    let collectedItems = 0;

    // Verificar y eliminar el archivo JSON existente
    const filePath = "products.json";
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("Archivo 'products.json' eliminado correctamente.");
    }

    // Crear barra de progreso
    const progressBar = new cliProgress.SingleBar({
      format: 'Web Scrapping  ' + colors.cyan('{bar}') + ' {percentage}%   {value} / {total} Artículos',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2800',
      hideCursor: true
    });

    const uniqueShelvings = new Set();

    while (pageNumber <= MAX_PAGES) {
      const url = `${BASE_URL}${pageNumber}`;
      // console.log(`Scraping page: ${pageNumber}`);
      await page.goto(url, { waitUntil: "networkidle2" });

      if (!cookiesRejected) {
        try {
          const buttonCookies = await page.waitForSelector(
            "#onetrust-reject-all-handler",
            { timeout: 10000 }
          );
          if (buttonCookies) {
            await buttonCookies.evaluate((el) => el.click());
            cookiesRejected = true;
          }
        } catch (error) {
          console.log("No se encontró el botón de cookies o ya fue rechazado. 😎");
        }
      }

      // Obtener el total de artículos
      if (totalItems === 0) {
        try {
          totalItems = await page.$eval("progress.plp-product-list__progress", (el) => parseInt(el.max));
          progressBar.start(totalItems, 0); // Iniciar barra de progreso
          // console.log(`Total artículos a recolectar: ${totalItems}`);
        } catch (error) {
          console.error("Error al obtener el total de artículos: ", error);
          break;
        }
      }

      const products = await page.$$(".plp-fragment-wrapper");

      if (products.length === 0) {
        console.log("No se encontraron más productos en la página. Finalizando scraping.");
        break;
      }

      for (const product of products) {
        const shelving = {
          cleanImage: "",
          exampleImage: "",
          name: "",
          offer: false,
          price: "",
          stars: "",
          opinions: "",
        };

        const cleanImage = await product.$(".plp-image.plp-product__image");
        const cleanImageSrc = (await cleanImage?.evaluate((e) => e.src)) || "";

        shelving.cleanImage = cleanImageSrc;

        if (!uniqueShelvings.has(cleanImageSrc)) {
          uniqueShelvings.add(cleanImageSrc);

          const exampleImage = await product.$(".image.plp-product__image.plp-product__image--alt");
          const exampleImageSrc = (await exampleImage?.evaluate((e) => e.src)) || "";

          shelving.exampleImage = exampleImageSrc;

          const name = await product.$(".notranslate.plp-price-module__product-name");
          const nameText = (await name?.evaluate((e) => e.textContent)) || "";

          shelving.name = nameText;

          const offer = await product.$(".plp-commercial-message__title");
          const offerFinal = (await offer?.evaluate((e) => true)) || false;

          shelving.offer = offerFinal;

          const price = await product.$(".plp-price__sr-text");
          const priceText = (await price?.evaluate((e) => e.textContent.split(" ")[1])) || "";

          shelving.price = priceText;

          const stars = await product.$("span[aria-label]");
          const starsQuantity = (await stars?.evaluate((e) => e.ariaLabel.split(" ")[1])) || "";
          const opinionsQuantity = (await stars?.evaluate((e) => e.ariaLabel.split(" ").at(-1))) || "";

          shelving.stars = starsQuantity;
          shelving.opinions = opinionsQuantity;

          SHELVINGS.push(shelving);
          collectedItems++;

          progressBar.update(collectedItems);
        }
      }

      // console.log(`Articulos recolectados: ${collectedItems}`);

      // Comprobar si hemos recolectado todos los artículos
      if (collectedItems >= totalItems) {
        console.log(`Todos los artículos han sido recolectados. Total: ${collectedItems} / ${totalItems}`);
        break;
      }

      pageNumber++; // Pasar a la siguiente página
    }

    progressBar.stop();

    await connectDB();

    // Limpiar la colección antes de insertar nuevos datos
    await Shelving.deleteMany({});
    await Shelving.insertMany(SHELVINGS);

    console.log("Datos insertados en BBDD correctamente 🤘");

    await mongoose.disconnect();
    await browser.close();

    // Guardar los datos en un archivo JSON
    fs.writeFileSync("products.json", JSON.stringify(SHELVINGS, null, 2));
    console.log("Datos almacenados en 'products.json' 🤙");

  } catch (error) {
    console.error("Error al insertar datos: ", error);
    await mongoose.disconnect();
  }
};

scrapp();
