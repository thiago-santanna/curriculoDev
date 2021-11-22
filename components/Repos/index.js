import React from 'react'
import Repo from './Repo'
import UserStats from './UserStats'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Repos = ({ user, repos }) => {
  return (
    <div>
      <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-roxo'>Meus repositórios</h3>
      <UserStats user={user} />
      <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
        {repos.map(repo => {
          return (
            <Repo key={repo.id} repo={repo} />
          )
        })}
      </div>
    </div>
  )
}
export default Repos
