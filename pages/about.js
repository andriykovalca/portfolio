import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'

import Link from 'next/link'
import Aboutme from '../components/aboutme/aboutme'
import Skill from '../components/skill'

export default function about() {
    return (
        <Layout about>
        <Head>
          <title>About - Andriy Koval</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        </Head>
        <Header></Header>
        <Aboutme></Aboutme>

        <div className="skills">
          <h2>Skills</h2>
          <p>Deserunt irure excepteur sunt cupidatat sit ullamco. Labore laborum voluptate adipisicing nulla fugiat sit ipsum irure incididunt. Amet dolore esse id deserunt aliqua. Eu esse irure aute commodo nisi culpa aliqua. Aute magna magna nostrud sint excepteur ex sint aliqua aliqua id cupidatat dolore id consequat. Ad occaecat ipsum ea mollit qui nostrud minim deserunt culpa et sit laborum aliquip.</p>
          <div className="container">
            <Skill name="HTML5" icon="devicon-html5-plain"></Skill>
            <Skill name="CSS3" icon="devicon-css3-plain"></Skill>
            <Skill name="JavaScript" icon="devicon-javascript-plain"></Skill>
            <Skill name="ReactJS" icon="devicon-react-original"></Skill>
            <Skill name="NextJS" icon="devicon-nextjs-original"></Skill>
            <Skill name="JQuery" icon="devicon-jquery-plain"></Skill>
            <Skill name="PHP" icon="devicon-php-plain"></Skill>
            <Skill name="Gulp" icon="devicon-gulp-plain"></Skill>
            <Skill name="Git" icon="devicon-git-plain"></Skill>
            <Skill name="Bootstrap" icon="devicon-bootstrap-plain"></Skill>
            <Skill name="Apache" icon="devicon-apache-plain"></Skill>
            <Skill name="Wordpress" icon="devicon-wordpress-plain"></Skill>
            <Skill name="SASS" icon="devicon-sass-original"></Skill>
            <Skill name="Webpack" icon="devicon-webpack-plain"></Skill>
            <Skill name="NodeJS" icon="devicon-nodejs-plain"></Skill>
            <Skill name="Docker" icon="devicon-docker-plain"></Skill>
            <Skill name="DigitalOcean" icon="devicon-digitalocean-plain"></Skill>
            <Skill name="SSH" icon="devicon-ssh-original"></Skill>
            <Skill name="Vagrant" icon="devicon-vagrant-plain"></Skill>

          </div>
          <a class="button" href="/resume.pdf">Download resume</a>
        </div>
        <style jsx>{`
          .skills .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}

        </style>
      </Layout>
       

    )
}