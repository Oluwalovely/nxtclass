import { getUser } from '@/app/actions/user.actions'
import { dbConnect } from '@/app/libs/dbconnect';
import UserModel from '@/app/models/User.model';
import { User } from '@/app/types';
import React from 'react'


export async function generateStaticParams() {
    await dbConnect()
    const users: User[] = await UserModel.find()
    console.log(users);


    return users.map((user) => (


        {
            id: [user._id?.toString()]
        }
    ))
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const user: User = await getUser(id)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="bg-blue-600 px-6 py-8 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold">
                        {user.firstname?.[0]}
                        {user.lastname?.[0]}
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-white">
                        {user.firstname} {user.lastname}
                    </h2>
                </div>

                <div className="px-6 py-4 space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500 text-sm">First Name</span>
                        <span className="text-gray-900 font-medium text-sm">{user.firstname}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-500 text-sm">Last Name</span>
                        <span className="text-gray-900 font-medium text-sm">{user.lastname}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="text-gray-500 text-sm">Email</span>
                        <span className="text-gray-900 font-medium text-sm">{user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page