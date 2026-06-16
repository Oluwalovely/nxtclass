import React from 'react'

const Page = () => {
  return (
    
    <> 
    Navbar
    <div className='w-40 border border-[green] p-5 m-5 rounded-2xl'>
      <h1 className='text-xl text-center text-[silver] /leading-50 font-light tracking-tight /truncate /line-clamp-1'>This is my first Next app</h1>



      <button className='px-8 py-2 bg-amber-700 text-white rounded-2xl mt-5 '>Buy me</button>
    </div>

    <div className='border-2 border-gray-400 rounded-2xl bg-blue-900 p-[100]'>
        <h1 className='text-4xl text-white font-semibold'>Ready to dive in?</h1>
        <h1 className='text-4xl text-white font-semibold'>Start your free trial today.</h1>
    </div>
    </>
  )
}

export default Page