import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Repos from '../components/Repos'
import getUser from '../utils/getUser'

const Index = (props) => {
    return (
        <div className='container mx-auto bg-network-left lg:bg-network-right'>
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <Repos user={props.user} repos={props.repos} />
            <Footer currentDate={props.currentDate} />
        </div>
    )
}

export async function getStaticProps() {
    const {repos, user} = await getUser('xThiagoSant')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        },
        revalidate: 5
    }
}

/*
export async function getServerSideProps(context){
    const request = await fetch(process.env.API_URL + '/api/getUser')
    const { repos, user } = await request.json()
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
*/
export default Index
