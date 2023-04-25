// import React from "react";

// const App = () => {

//   const [comentarios, setComentarios] = React.useState(['teste'])
//   const [input, setInput] = React.useState('')

//   const inputElement = React.useRef()
    

//   const handleClick = () => {

//     setComentarios([...comentarios, input])
//     setInput('')

//     inputElement.current.focus()
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
//       </ul>

//       <input 
//         type="text" 
//         value={input} 
//         ref={inputElement}
//         onChange={({target}) => setInput(target.value)}  
//       />

//       <button onClick={handleClick}>Enviar</button>

//     </div>
//   )
// }

// export default App;




import React from 'react'

const App = () => {

  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)

  const timeoutRef = React.useRef()

  const handleClick = () => {

    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho')

    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    },2000)

  }


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar carrinho {carrinho}</button>
    </div>
  )
}

export default App