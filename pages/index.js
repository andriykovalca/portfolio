import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


// let tvtime = require('tvtime-api')
// let username = 'chookity';
// let password = 'AKwm25903';
// tvtime.login({username}, {password})

// tvtime.show(260449).then(data => {
//   console.info(data)
// })

export default function Home({users}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <Link href="https://fonts.googleapis.com/css2?family=Roboto&display=optional" rel="stylesheet" />
        <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />

      </Head>
      <Header></Header>
      
      <div className='intro'>
        <h1>Hello</h1>

        <p >
          My name is Andriy Koval, and I am a front end web developer with over 5 years of experience and a track record of delivering projects on time and within budget.
        </p>
        <p >
            I enjoy challenges and finding creative solutions to solve problems thus I am facing programing challenges with excitement. I thrive on continuous learning and I love discovering new skills. I enjoy solving complex problems and delivering high-quality results. I am passionate about creating user-friendly and visually appealing websites and applications. When I am not coding I am usually out with my camera or spending time with friends and family or catching up some tv shows. <Link legacyBehavior href="/about">
            <a className='blue-underline'>Continue reading...</a>
          </Link>
        </p>
        
      </div>
      
    </Layout>

  )
}