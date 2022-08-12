import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninjas Listning | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea tenetur facilis quos commodi aliquid consequatur, maxime non molestias eligendi tempora exercitationem laborum nulla illum recusandae quas consectetur quod hic.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea tenetur facilis quos commodi aliquid consequatur, maxime non molestias eligendi tempora exercitationem laborum nulla illum recusandae quas consectetur quod hic.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>

    </div>
    </>
  )
}
