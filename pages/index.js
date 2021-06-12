import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywards" content="ninjas" />
    </Head>
      <div >
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>**CONGRATULATIONS!!** Mitchell Martin Inc.'s Nícolas Robles will be honored at the Latin Impact Awards Virtual Ceremony on July 22, 7pm, 2021. MMI is so proud of Nic! This is a great honor and well deserved</p>
        <p className={styles.text}>Best practices. Actionable insights. How can Australian corporates restore trust and build long-term value?</p>
        <Link href="/ninjas" ><span className={styles.btn}>See Ninja Listing</span></Link>
      </div>
    </>
  )
}
