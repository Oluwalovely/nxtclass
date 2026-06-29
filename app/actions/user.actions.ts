"use server"

import { redirect } from "next/navigation";
import { dbConnect } from "../libs/dbconnect";
import UserModel from "../models/User.model";
import { revalidatePath } from "next/cache";


export const registerUser = async(form:FormData)=>{
    console.log(form);
    const user = {
        firstname: form.get('firstname') as string,
        lastname: form.get('lastname') as string,
        email: form.get('email') as string,
        password: form.get('password') as string
    }

    await dbConnect()
    await UserModel.create(user)
    console.log(user);


    revalidatePath('/registeredUser')
    redirect('/registeredUser')
}

export const getAllUsers = async()=>{
    await dbConnect()
    const users = await UserModel.find().select('-password').lean()
    return users
}