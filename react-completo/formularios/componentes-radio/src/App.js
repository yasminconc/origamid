import React from 'react'
import Input from './forms/Input'
import Select from './forms/Select'
import Radio from './forms/Radio'


const App = () => {

    const [ nome, setNome ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ produto, setProduto] = React.useState('')
    const [ cor, setCor] = React.useState('')
    const [ frutas, setFrutas] = React.useState('')

  
  return (
    <form>

        <h2>Cores</h2>

        <Radio 
          options={['Azul', 'Vermelho']}
          value={cor}
          setValue={setCor}
        />

        <h2>Frutas</h2>

        <Radio 
          options={['Limão', 'Laranja', 'Uva']}
          value={frutas}
          setValue={setFrutas}
        />

        <Select 
          options={['smartphone', 'tablet']} 
          value={produto}
          setValue={setProduto}
        />

        <Input 
          id='nome'
          label='Nome'
          value={nome}
          setValue={setNome}
        />

        <Input 
          id='email'
          label='Email'
          value={email}
          setValue={setEmail}
          required
        />

        <button>Enviar</button>
        
    </form>
  )
}

export default App