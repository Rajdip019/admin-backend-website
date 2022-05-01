import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter();
const [name, setName] = useState<string>("");
const changeRoute = () => {
    router.push({
        "pathname" : "update-medicine/update",
        "query" : {
            "medName" :  name,
        }
    })
} 
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen flex-col">
        <p>Medicine Name <span className="text-xs">(Write accurate medicine Name)</span></p>
                    <input type="text" className="w-10/12 px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => {setName(e.target.value)}} value={name} />
        <button className="mt-8 bg-purple-400 px-6 py-2 mb-20 rounded-lg text-white hover:bg-purple-500 transition-all" onClick={() => {changeRoute()}}>Update</button>
        </div>
        <Footer />
    </div>
  )
}

export default index