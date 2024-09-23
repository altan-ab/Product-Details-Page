import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  const [count, setCount] = useState(0)

  const { details } = props

  function handleIncrementClick() {
    setCount((c) => c + 1)
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }

  return (
    <div className="product">
      <Link to={`/products/${details.id}`}>
        <img src={details.image} width="50" alt={details.name} />
        <div className="product-info">
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
      </Link>
      <aside className="quantity">
        <button className="product-buttons" onClick={handleIncrementClick}>
          +1 Add
        </button>
        <button className="product-buttons" onClick={handleDecrementClick}>
          -1 Remove
        </button>
        <h4>Quantity:{count}</h4>
      </aside>
    </div>
  )
}
