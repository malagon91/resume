import react from 'react'
import Image from 'next/image'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles.home}>
      <header>
        <Image src="/logo.png" alt="Miguel Malagón" width={100} height={100} />
        <div>
          <p className={styles.name}>Miguel Malagón</p>
          <p className={styles.title}>Software engineer</p>
        </div>
      </header>
    </div>
  )
}

export default Home
