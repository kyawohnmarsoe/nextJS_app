import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

//fetch all datas from API
export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{ninjas:data}
    }
}

const index = ({ninjas}) => {
    return (
        <div>
             <Head>
                <title>Ninja List | Listing</title>
                <meta name="keywards" content="ninjas" />
            </Head>
           <h1> All Ninjas</h1>
           {
               ninjas.map(ninja=>(
                   <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                       <a className={styles.single}>
                           <h3>{ninja.name}</h3>
                       </a>
                   </Link >
               ))
           }
        </div>
    )
}

export default index
