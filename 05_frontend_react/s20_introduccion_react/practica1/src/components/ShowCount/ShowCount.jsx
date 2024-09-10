import './ShowCount.css'

const ShowCount = (props) => {
  return (
    <div>
      <h2>
        You clicked here {props.count} {props.count === 1 ? 'time' : 'times'}
      </h2>
    </div>
  )
}

export default ShowCount
