import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import posts from '../posts.json'
import { motion } from 'framer-motion'

export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99]
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing
      }
    }
  }

  const staggered = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div className={styles.container} initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Head>
        <title>Tech + Lifestyle Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <motion.main className={styles.main} variants={staggered}>
        {posts.map(post => (
          <Link key={post.id} href={`/[post]`} as={`/${post.id}`} >
            <a className={imgStyleMap(post.image_style)}>
              <motion.img src={post.image_url} alt="Google Home" whileHover={{ scale: 1.025 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }} variants={fadeInUp} />
            </a>
          </Link>
        ))}
      </motion.main>
    </motion.div>
  )
}

const imgStyleMap = (image_style) => {
  switch (image_style) {
    case 'tall':
      return styles.imgTall
    case 'large':
      return styles.imgLarge
    default:
      return styles.img
  }
}