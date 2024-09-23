import StoreFront from './pages/StoreFront'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StoreFront />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  )
}
