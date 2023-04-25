import React from 'react'
import Produto from './Produto'
import axios from 'axios'

const App = () => {

  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)


  const handleClick = (event) => {

    setCarregando(true)
    axios.get(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    .then((res) => {
      setDados(res.data)
    })
    setCarregando(false)
      
  }



  return (
    <div>
      <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>

      {carregando && <p>carregando...</p>}
      {!carregando && dados && <Produto resultado={dados} fundo='purple'/>}
    </div>
  )
}

export default App
