import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <Head>
    <title>Medorant Admin Pannel</title>
    </Head>
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex px-28 justify-between mt-28 items-center">
      <div>
      <h1 className="text-3xl">Hey, You are a Admin or Database Manager Right?</h1>
      <p className="text-xl mt-5">You know what to do go ahead!</p>
      <p className="text-sm mt-2">If you are not an admin then what are you doing here?</p>
      <Link href="/add-medicine">
      <button className="mt-8 bg-purple-400 px-6 py-2 rounded-lg text-white hover:bg-purple-500 transition-all">Go Ahead</button>
      </Link>
      </div>
      <div>
        <img src="/home_main.png" alt="" className="w-72" />
      </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Home
