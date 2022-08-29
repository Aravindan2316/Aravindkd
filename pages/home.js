import Router from 'next/router'
import Head from 'next/head'

function HomePage(props) {
    console.log(props);
    return (
        <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <div>Welcome to Next.js!</div>
            <span onClick={() => Router.push('/?counter=1', undefined, { shallow: false })}>Reload</span>
            <br />
            <div>Next stars: {props.stars}</div>
            <img alt="TutorialsPoint Logo" />
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: { stars: json.stargazers_count }
    }
}

export default HomePage