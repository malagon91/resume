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
      <article>
        <p>
          I’m a mexican <span>software engineer</span>. I love to create amazing
          things.
          <br />
          Based in MX.
        </p>
      </article>
      <footer>
        <a href="https://github.com/malagon91" target="_blank" rel="noreferrer">
          github
        </a>
        <a
          href="https://www.linkedin.com/in/malagon91/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://twitter.com/malagon91"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>
      </footer>
    </div>
  )
}

export default Home
