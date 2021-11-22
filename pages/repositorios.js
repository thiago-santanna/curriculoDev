import React from 'react'

const Index = ({ repos, user }) => {
    console.log('repositorio')
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Meus repositórios eu sou o Thiago Sant'anna</h1>
            <h2 className='font-bold text-3xl'>Meus repositórios no GitHub</h2>
            <p>Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}
export async function getServerSideProps(context){
    //const request = await fetch(process.env.API_URL + '/api/getUser')
    const { repos, user } = await getUser('xThiagoSant')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index
