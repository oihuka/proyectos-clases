import React from 'react'
import { useForm } from 'react-hook-form'

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
      <div>
        <label htmlFor='username'>Nombre de usuario:</label>
        <input
          id='username'
          {...register('username', { required: 'Este campo es requerido' })}
        />
        {errors.username && (
          <span className='error'>{errors.username.message}</span>
        )}
      </div>

      <div>
        <label htmlFor='email'>Correo electrónico:</label>
        <input
          id='email'
          {...register('email', {
            required: 'Este campo es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo electrónico inválido'
            }
          })}
        />
        {errors.email && <span className='error'>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor='password'>Contraseña:</label>
        <input
          id='password'
          type='password'
          {...register('password', {
            required: 'Este campo es requerido',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message:
                'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'
            }
          })}
        />
        {errors.password && (
          <span className='error'>{errors.password.message}</span>
        )}
      </div>

      <button type='submit'>Registrarse</button>
    </form>
  )
}

export default FormularioRegistro
