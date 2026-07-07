import React from 'react'
import { dbConnect } from '../libs/dbconnect'
import UserModel from '../models/User.model'
import { User } from '../types'
import { deleteUser } from '../actions/user.actions'

const Page = async () => {
    await dbConnect()
    const users: User[] = await UserModel.find()


    return (
        <div className='flex gap-2 flex-wrap'>
            {
                users.map((_, idx) => (
                    <div className='border rounded-sm px-4 py-2' key={_._id}>

                        <h1 className='text-lg font-bold'>{idx + 1}.{_.firstname + " " + _.lastname}</h1> <br />

                        <form action={`/registeredUser/${_._id}`} className='inline'>
                            <button type="submit" className='px-4 py-2 bg-emerald-800 text-white rounded-sm'>Get more info</button>
                        </form>

                        <form action={deleteUser} className='inline'>
                            <input type="hidden" name="id" value={_._id?.toString()} />
                            <button type="submit" className='px-4 py-2 bg-red-800 text-white rounded-sm'>Delete User</button>
                        </form>

                    </div>
                ))
            }
        </div>
    )
}

export default Page