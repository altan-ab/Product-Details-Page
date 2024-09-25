import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import useFetch from '../utilities/useFetch'

export default function ProductDetails() {
  const { id } = useParams()
  const location = useLocation()
  const { count } = location.state || { count: 0 } // `count` bilgisini `state`'ten al
  const [product, setProduct] = useState({})
  const { get, loading } = useFetch(
    'https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/'
  )

  useEffect(() => {
    get(`productdetails/id${id}.json`)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
  }, [id])

  if (loading || !product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to="/">Back home</Link>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${count > 0 ? product.price * count : product.price}</h3>
          <img src={product.image} width="100" />
        </div>
      )}
    </div>
  )
}
