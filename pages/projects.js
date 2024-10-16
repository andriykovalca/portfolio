import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'

import Link from 'next/link'
import Project from '../components/project/project'

export default function portfolio() {
    return (
        <Layout projects>
        <Head>
          <title>Projects - Andriy Koval</title>
          <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></Link>
        </Head>
        <Header></Header>
        <h1>Latest projects</h1>

        <div className="projects">

          <Project 
            title="PostCredit.app" 
            description="A web app that helps you find and explore movies with post-credit scenes"
            tech="Node.js, Express.js, React.js, Axios, Cheerio, PSQL"
            previewlink="https://www.postcredit.app/"
          >
          </Project>

          <Project 
            title="Uberflip.com" 
            description="Uberflip's corporate website, built in association with miltiple designers and agencies."
            tech="Wordpress, ACF, PHP, JS, SCSS, Vagrant, GIT, WP Engine"
            previewlink="https://uberflip.com/"
          >
          </Project>

          <Project 
            title="Rocket Science VFX" 
            description="Corporate website for Toronto-based Visual Effects studio"
            tech="Wordpress, ACF, PHP, JS, SCSS, GIT"
            previewlink="https://www.rsvfx.com/"
          />

          <Project 
            title="Uberflip Hub" 
            description="Custom built Uberflip Resource center built with Uberflip Hub App"
            tech="JS/jQuery, SCSS, Bootstrap, GIT, Uberflip"
            previewlink="https://hub.uberflip.com/"
          />
          
          <Project 
            title="Uberflip Academy" 
            description="Uberflip's Academy built with Uberflip app and TONS of modifications and custom features"
            previewlink="https://academy.uberflip.com/"
            tech="JS/jQuery, SCSS, Bootstrap, GIT, Uberflip"
          />         
            
          <Project 
            title="Bogoroch.com" 
            description="Corporate website for Toronto-based personal injury law firm"
            tech="Wordpress, ACF, PHP/HAML, JS/CoffeeScript, SCSS, GreenSock, GIT"
            previewlink="https://www.bogoroch.com/"
          />

          <Project 
            title="Academy Theatre" 
            description="Gallery website for a theatre based in Lindsay Kawartha Lakes, ON"
            tech="Wordpress, ACF, PHP, JS, SCSS, GreenSock, Vagrant, GIT"
            previewlink="https://academytheatre.ca/"
          />

          <Project 
            title="Rick and Morty db" 
            description="Just a practice project to learn more about ReactJS - fetching data from API"
            previewlink="https://rnmdb.netlify.app/"
            github="https://github.com/andriykovalca/rnmdb"
            tech="ReactJS, CRA, SASS, Rick and Morty API"
          >
          </Project>


          
        </div>
        
        <style jsx>{`

        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 3rem;
        }
             
        `}</style>
      </Layout>


    )
}