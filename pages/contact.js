import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import { useState } from 'react';
import styles from '../styles/contact.module.scss';


import Link from 'next/link'

export default function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    e.target.reset();
    alert('Your message has been sent!');
  };

  


    return (
        <Layout contact>
        <Head>
          <title>Contact - Andriy Koval</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        </Head>
        <Header></Header>
        <h1>Get in touch</h1>
        <p>You can find contact me via <a href="https://www.linkedin.com/in/kovalandriy/" target="_blank">Linkedin</a> or by simply completing the form below.</p>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@company.com"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            placeholder="Hi Andriy, I would like to hire you!"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>

        </div>
        
      </Layout>
       

    )
}