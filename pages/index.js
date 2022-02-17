import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Introduction from '../components/introduction/introduction'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({users}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=optional" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />

      </Head>
      <Header></Header>
      <Introduction></Introduction>
    </Layout>

  )
}