import React from 'react'

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center p-5">
        <div className="bg-gray-200 p-10 rounded-sm shadow-md p-10 md:1/2 xl:1/3 flex flex-col gap-4 justify-center">
            <div>
                <label htmlFor="email" className='text-black'>Email</label>
                <input type="email" id="email" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your email' autoFocus/> 

            </div>


            <div>
                <label htmlFor="password" className='text-black'>Password</label>
                <input type="password" id="password" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your password' autoFocus/>
            </div>

            <button className="bg-black text-white hover:pointer hover:-translate-y-2 hover:gray-200">Login</button>
        </div>
    
    
    </div>
  )
}

export default Page