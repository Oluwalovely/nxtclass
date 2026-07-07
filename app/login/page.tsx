'use client'
import { useActionState } from 'react'
import { loginUser } from '../actions/user.actions'


const Page = () => {
    const [state, formAction] = useActionState(loginUser, null)

    return (
        <div className='flex h-screen justify-center items-center px-5'>
            <form action={formAction} className='bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3 flex-col gap-4 flex justify-center'>
                <h1 className='text-center text-2xl font-bold'>Login Here</h1>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" name="email" id="email" className='border outline-1 focus:outline-green-700 p-2 w-full rounded-sm' autoFocus />
                </div>
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" name="password" id="password" className='border outline-1 focus:outline-green-700 p-2 w-full rounded-sm' />
                </div>
                {state?.message && <p className='text-red-600 text-sm'>{state.message}</p>}
                <button type="submit" className='py-2 bg-black text-white rounded-sm hover:bg-green-800 sm:hover:bg-red-800 md:hover:bg-blue-800 hover:cursor-pointer hover:-translate-y-1 transition delay-150'>Login</button>
            </form>
        </div>
    )

}

export default Page