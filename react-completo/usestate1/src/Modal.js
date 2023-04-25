import React from 'react'

export const Modal = ({modal, setModal}) => {
    if(modal === true)
  return (
    <div>
        esse é um modal, <button onClick={() => setModal(false)}>fechar</button>
    </div>
  )
  return null
}
