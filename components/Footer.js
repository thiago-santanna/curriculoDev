import React from 'react'

const Footer = ({ currentDate }) => {
  return (
    <div>
      <p className='text-center my-8 py-4 border-t-2'>
        Experiência com linguagens de programação e frameworks como: Delphi, Html, CSS, JavaScrpit, NodeJs, React, ReactNative, PHP, JAVA, RestFull, API, Git e Github. 
        Experiência com configuração e segurança de dados usando o banco de dados Postgres, firebird e mysql.
        Conhecimento técnico de hardware e AWS.
        <br />
        confira em meu github.
        <br />
        <a href='https://github.com/xThiagoSant'>https://github.com/xThiagoSant</a>
      </p>
      <p className='text-center my-8 py-4 border-t-2'>Latest version: {currentDate}</p>
    </div>
  )
}
export default Footer
