import Head from 'next/head'
import { Inter } from '@next/font/google'
import Home from '../components/Home'
import { Fragment } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>Miguel Malagón</title>
        <meta name="description" content="Personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Fragment>
  )
}
