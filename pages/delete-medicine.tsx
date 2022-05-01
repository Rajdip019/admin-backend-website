import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState } from 'react'

const deleteMedicine = () => {
const [name, setName] = useState<string>("");
const deleteMed = async() => {
    const res = await fetch(`https://8g34ra4qq2.execute-api.ap-south-1.amazonaws.com/dev/object/${name}`, {
        method: 'DELETE',
    }) 
}

  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen flex-col">
        <p>Medicine Name <span className="text-xs">(Write accurate medicine Name)</span></p>
                    <input type="text" className="w-10/12 px-3 bg-gray-200 rounded h-10 my-2 ring-1" onChange={(e) => {setName(e.target.value)}} value={name} />
        <button className="mt-8 bg-red-400 px-6 py-2 mb-20 rounded-lg text-white hover:bg-red-500 transition-all" onClick={() => {deleteMed()}}>Delete</button>
        </div>
        <Footer />
    </div>
  )
}

export default deleteMedicine;