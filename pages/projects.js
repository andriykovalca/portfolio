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
        </Head>
        <Header></Header>
        <h1>Latest projects</h1>
        <p>Veniam quis labore ullamco non minim nisi esse ex fugiat excepteur dolor. Aliquip laboris nulla commodo mollit ullamco labore ullamco fugiat reprehenderit Lorem voluptate nulla velit do. Ullamco non Lorem consectetur elit in non sunt laboris eu et ipsum. Ex minim minim tempor sint magna. Duis enim labore magna enim amet qui esse amet cupidatat. Cillum eu fugiat commodo aliquip exercitation laboris culpa aliqua enim ut. Ullamco consequat aliquip fugiat ut.</p>
        <div className="projects">
          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>
          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
          >
          </Project>          <Project 
            title="Recipies project" 
            description="Ipsum laboris incididunt nisi aliquip in in aliqua pariatur fugiat."
            github="/"
            previewlink="/"
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