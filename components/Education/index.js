import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Graduação',
    subject: 'Gestão de sistema de Informação',
    institution: 'Faculdade Estácio de Sá'
  },
  {
    degree: 'Curso de aperfeiçoamento',
    subject: 'Servir para liderar',
    institution: 'Faculdade Estácio de Sá'
  },
  {
    degree: 'Go Stack/Ignite',
    subject: 'Desenvolvedor Fullstack JavaScript',
    institution: 'Rocketseat'
  },
  {
    degree: 'FullStack Master',
    subject: 'Desenvolvedor Fullstack JavaScript',
    institution: 'Dev Pleno'
  },
  {
    degree: 'Java Especialista Spring Rest',
    subject: 'Fundamentos JAVA e Spring',
    institution: 'AlgaWork'
  },
  {
    degree: 'Java Programação Orientada a Objetos',
    subject: 'Fundamentos JAVA e Spring',
    institution: 'Dev Superior'
  },
  {
    degree: 'Java Programação Orientada a Objetos',
    subject: 'Fundamentos JAVA e Spring',
    institution: 'Alura'
  },
  {
    degree: 'Entrando na Nuvem',
    subject: 'Criar soluções no AWS',
    institution: 'Cloud Treinamentos'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-roxo'>Educação</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education
