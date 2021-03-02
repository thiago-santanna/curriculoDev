import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsappSquare } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-roxo border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-roxo text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contato</h3>
      <p className='text-center md:text-left'>
        <a href='https://www.linkedin.com/in/thiago-sant-anna-800a9a33/' title='LinkedIn Profile'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://github.com/xThiagoSant' title='GitHub Profile'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://api.whatsapp.com/send?phone=5581992713545&text=Ol%C3%A1%20Deixe%20sua%20mensagem' title='WhatsApp'>
          <FaWhatsappSquare className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://www.instagram.com/xthiagosant/' title='Instagram'>
          <FaInstagram className='text-5xl md:text-6xl inline-block' />
        </a>
        <br />
        <span className='inline-block mt-4'>E-mail: tss.webapps@gmail.com</span>
      </p>
    </div>
  )
}
export default ContactMe
