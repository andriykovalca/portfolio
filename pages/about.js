import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import StoryCard from '../components/storyCard/storyCard';
import Link from 'next/link'
import Skill from '../components/skill'

// Icons
import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; // vfx
import GavelIcon from '@mui/icons-material/Gavel'; // law
import TheatersIcon from '@mui/icons-material/Theaters'; // film
import CompareIcon from '@mui/icons-material/Compare'; // post
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function about() {
    return (
        <Layout about>
        <Head>
          <title>About - Andriy Koval</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        </Head>
        <Header></Header>

        <div className='bio'>
          <h1>About me</h1>
          <p>
            Creative frontend developer with 5+ years of experience who cares about readability, speed, and the open web. Expert in designing, developing, and testing web-based applications incorporating a variety of technologies. I bring a strong product sense and a sharp eye for detail to every project because I come from a variety of creative positions in my background.
          </p>
        </div>

        <div className='downloadResume'>
          <h2>Resume</h2>
          <p>download the PDF version with all details or keep scrolling</p>
          <a className="button" target="_blank" href="/Andriy-Koval-Resume.pdf"><PictureAsPdfIcon /> Download</a>
        </div>

        <div className='path'>
          <h2>My path</h2>
          
          <StoryCard 
            icon={<ChildCareIcon/>}
            title="Born"
            description="A long time ago in a galaxy far, far away..."
          />

          <StoryCard 
            icon={<SchoolIcon/>}
            title="School"
            description="Passed school without Google 😎"
          />

          <StoryCard 
            icon={<GavelIcon/>}
            title="Ivan Franko Lviv National University"
            description="Master's Degree in Law"
          />

          <StoryCard 
            icon={<TheatersIcon/>}
            title="Centennial College"
            description="Post Graduate Certificate program, Advanced TV & Film"
          />
          
          <StoryCard 
            icon={<CompareIcon/>}
            title="Humber College"
            description="Post Graduate Certificate program, Post Production"
          />

          <StoryCard 
            icon={<CodeIcon/>}
            title="Vivam"
            description="Web Developer and Designer"
          />

          <StoryCard 
            icon={<AutoFixHighIcon/>}
            title="Rocket Science VFX"
            description="Digital Compositor and TD"
          />

          <StoryCard 
            icon={<CodeIcon/>}
            title="Pixelcarve"
            description="Front-end Web Developer"
          />

          <StoryCard 
            icon={<CodeIcon/>}
            title="Freelance"
            description="Digital Compositor and TD"
          />

          <StoryCard 
            icon={<CodeIcon/>}
            title="Uberflip"
            description="Front-end Web Developer"
          />
          
        </div>

        <div className="skills">
          <h2>My toolbox</h2>
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