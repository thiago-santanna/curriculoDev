const getUser = async (username) =>{
    const resUser = await fetch(`https://api.github.com/users/${username}`)
    const user = await resUser.json()

    const resRepo = await fetch(`https://api.github.com/users/${username}/repos?sorte=updated`)
    const originalRepos = await resRepo.json()
    
    const dontShowRepos = [`${username}/DLL_wooCommerce`, `${username}/SalesWebMVC`]

    const isNotFork = repo => !repo.fork
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
    })

    const repos = originalRepos
        .filter(isNotFork)
        .filter(dontShowFilter)
        .map(extractData)

    return {
        repos,
        user
    }
}

export default getUser
