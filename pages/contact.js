import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import styles from '../styles/contact.module.scss';
import React, {useState, useEffect} from "react";

export default function contact() {

  const text = "***********@gmail.com" ;
  const [buttonText, setButtonText] = useState(text);

  return (
        <Layout contact>
        <Head>
          <title>Contact - Andriy Koval</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        </Head>
        <Header></Header>
        <div className='contactme'>
          <h1>Get in touch</h1>
          <p>The fastest way to contact me is via <a className='blue-underline' href="https://www.linkedin.com/in/kovalandriy/" target="_blank">Linkedin</a> or by simply sending an email to <button className='emailButton blue-underline' type="submit" onClick={() => setButtonText("akovaldev@gmail.com")} > {buttonText} </button></p>
        </div>
        
        
        
      </Layout>
       

    )
}