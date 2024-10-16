import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>Andriy Koval - Front End Developer</title>
      </Head>
      <Header></Header>
      
      <div className='intro'>
        <h1>Hello</h1>

        <p >
          My name is Andriy Koval, and I am a front end web developer with over 5 years of experience and a track record of delivering projects on time and within budget.
        </p>
        <p >
            I enjoy challenges and finding creative solutions to solve problems thus I am facing programing challenges with excitement. I thrive on continuous learning and I love discovering new skills. I enjoy solving complex problems and delivering high-quality results. I am passionate about creating user-friendly and visually appealing websites and applications. When I am not coding I am usually out with my camera or spending time with friends and family or catching up some tv shows. <Link className='blue-underline' href="/about">
            Continue reading...
          </Link>
        </p>
        
      </div>
      
    </Layout>

  )
}