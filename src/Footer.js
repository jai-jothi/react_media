import React from 'react'

export const Footer = () => {
  const today=new Date()
  return (
    <footer className='footer'> 
        <p>Copyright &copy;{today.getFullYear()}</p>
    </footer>
  )
}
