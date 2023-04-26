import React from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  },
]

const App = () => {

  const [form, setForm] = React.useState({

    nome: '',
    email: '',
    senha: '',
    cep: '' ,
    numero: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const [response, setResponse] = React.useState(null)

  const handleChange = ({ target }) => {

    const { id, value } = target

    setForm({ ...form, [id]: value })
  }

  const handleSubmite = (event) => {
    event.preventDefault()

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(form)

    }).then((response) => {
        setResponse(response);
    })
  }

  return (
    <form onSubmit={handleSubmite}>

      {formFields.map(({id, label, type}) =>

        <div key={id}>

          <label htmlFor={id}>{label}</label>

          <input 
            type={type} 
            id={id}
            value={form[id]}
            onChange={handleChange}
            />

        </div>
      )}

      {response && response.ok && <p>Formulário Enviado</p>}

      <button>Enviar</button>

    </form>
  )
}

export default App
