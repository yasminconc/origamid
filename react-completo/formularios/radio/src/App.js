import React from 'react'

const App = () => {

  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (

    <form>

      <label>

        <input
          type="radio"
          value="notebook"
          name='produto'
          onChange={handleChange}
        />
        Notebook

      </label>

      <label>

        <input
          type="radio"
          value="smartphone"
          name='produto'
          onChange={handleChange}
        />
        Smartphone

      </label>

      <label>

        <input
          type="radio"
          value="tablet"
          name='produto'
          onChange={handleChange}
        />
        Tablet
        
      </label>

    </form>
  );
};


export default App