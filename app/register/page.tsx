import React from 'react'
import { registerUser } from '../actions/user.actions'

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center p-5">
        <form action={registerUser} className="bg-gray-100 p-10 rounded-sm shadow-md p-10 md:1/2 xl:1/3 flex flex-col gap-4 justify-center">
            
            <h1 className='text-center text-2xl font-bold'>Register Here</h1>
            
            <div>
                <label htmlFor="firstname" className='text-black'>First Name:</label>
                <input type="text" name="firstname" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your first name'/> 
            </div>

            <div>
                <label htmlFor="lastname" className='text-black'>Last Name:</label>
                <input type="text" name="lastname" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your last name'/> 
            </div>

            <div>
                <label htmlFor="email" className='text-black'>Email</label>
                <input type="email" name="email" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your email'/> 
            </div>

            <div>
                <label htmlFor="password" className='text-black'>Password</label>
                <input type="password" name="password" className='w-full p-3 bg-gray-300 rounded-sm mt-2 mb-5 text-black' placeholder='Enter your password'/> 
            </div>


            <button className="bg-black text-white hover:pointer hover:-translate-y-2 hover:gray-200">Register</button>
        </form>
    
    
    </div>
  )
}

export default Page