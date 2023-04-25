import React from 'react'

const Produto = ({ resultado, fundo }) => {
  return (
    <div>
      <h1 style={{color: fundo}}>{resultado.nome}</h1>
      <p> R$ {resultado.preco}</p>
      <img src={resultado.fotos[0].src} alt={resultado.fotos[0].titulo}/>
    </div>
  )
}

export default Produto