import React from 'react'
import getUser from '../utils/getUser'

const Index = ({repos, user}) =>{
    return (
        <div className="container mx-auto">
            <h1 className='text-5xl'>Meus repositórios, Eu sou O Thiago Sant'anna</h1>
            <p>GitHub stats: public repos: {user.public_repos} / Public gists: {user.public_gists} / Followers: {user.followers}</p>
            <h2 className="font-bold text-3xl">Meus repositorios no GitHub</h2>
            {repos.map( repo => {
                return (
                    <div key={ repo.id} className="rounded mx-8 my-4 p-4 hover:shadow-md bg-gray-200">
                        <h3 className="font-bold">{repo.full_name}</h3>
                        <p>{repo.language} / Stars: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const {repos, user} = await getUser('xThiagoSant')

    return{
        props:{
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}

export default Index