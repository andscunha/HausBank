import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MarcaDagua from './components/MarcaDagua'
import ProdutosSecoes from './components/ProdutosSecoes'
import Pilares from './components/Pilares'
import SobreNos from './components/SobreNos'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <MarcaDagua/>
      <ProdutosSecoes/>
      <Pilares/>
      <SobreNos/>
      <Footer/>
    </>
  )
}

export default App
