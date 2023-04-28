import React from 'react'
import Input from './forms/Input'

const App = () => {

  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)


  const validateCep = (value) => {
    if(value.length === 0) {
        setError('Preencha um valor')
        return false

    }else if(!/^\d{5}-?\d{3}$/.test(value)) {
        setError('Preencha um cep válido')
        return false

    }else {
      setError(null)
      return true
    }
  }

  const handleBlur = ({ target }) => {
    validateCep(target.value)

  }

  const handleChange = ({ target }) => {
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  const handleSubmite = (event) => {
    event.preventDefault()
    if(validateCep(cep)){
      console.log("enviou");

    }else{
      console.log('Não enviar');
    }
  }


  return (
    <form onSubmit={handleSubmite}>

      <Input
        label='cep'
        type='text'
        id='cep'
        placeholder='00000-000'
        value={cep}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {error && <p>{error}</p>}

      <button>Enviar</button>

    </form>
  )
}

export default App