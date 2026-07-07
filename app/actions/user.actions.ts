"use server"

import { revalidatePath } from "next/cache";
import { dbConnect } from "../libs/dbconnect";
import UserModel from "../models/User.model";
import { User } from "../types";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { encrypt } from "../libs/session";

export const registerUser = async (form: User) => {
    try {
        console.log(form);
        // const user= {
        // firstname:String(form.get("firstname")),
        // lastname:form.get("firstname")?.toString(),
        // email:form.get("email")?.toString(),
        // password:form.get('password')?.toString()
        const firstname = form.firstname;
        const lastname = form.lastname;
        const email = form.email;
        const password = form.password;
        // }

        await dbConnect();
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(form.password, saltRound);

        const createdUser = await UserModel.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        if (!createdUser) {
            return {
                status: 400,
                message: "User creation failed",
            };
        }

        const token = await encrypt({id:createdUser._id})
        console.log(token)

        revalidatePath("/registeredUser");
        // redirect("/users")
        return {
            status: 201,
            message: "user created successfully",
            data: createdUser
        }
        // console.log("i am workinggggg");


    } catch (error:any) {
        console.log(error.code);


        if (error.code == 11000) {
            return {
                status: 500,
                message: "User already exist!",

            };
        } else {
            return {
                status: 500,
                message: "User creation failed",

            };
        }
    }
};


export const getUser = async (id: string) => {
    await dbConnect()

    const user = await UserModel.findById(id)

    if (!user) {

        return {
            message: "user does not exist"
        };
    } else {

        return user;
    }

}

// export const loginUser = async (form: FormData) => {
//     const email = form.get("email")?.toString()
//     const password = form.get("password")?.toString()
//     await dbConnect()

//     const user = await UserModel.findOne({ email: email })

//     if (!user) {
//         return {
//             message: "Invalid email or password"
//         };
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch) {
//         return {
//             message: "Invalid email or password"
//         };
//     }

//     return user;
// }

export const loginUser = async (previousState: any, form: FormData) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();

    if (!email || !password) {
        return { message: "Invalid email or password" };
    }

    await dbConnect();

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
        return { message: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return { message: "Invalid email or password" };
    }

    const token = await encrypt({id:user._id})
    console.log(token)

    redirect('/registeredUser');
}


// export const deleteUser = async (form: FormData) => {
//     const id = form.get("id")?.toString();

//     if (!id) {
//         return { message: "Invalid id" };
//     }

//     await dbConnect();
//     const user = await UserModel.findByIdAndDelete(id);

//     if (!user) {
//         return { message: "user does not exist" };
//     }

//     revalidatePath("/registeredUser");
//     return { message: "user deleted successfully" };
// }

export const deleteUser = async (form: FormData) => {
    const id = form.get("id")?.toString();
    console.log(id)

    if (!id) {
        return;
    }

    await dbConnect();
    await UserModel.findByIdAndDelete(id);

    revalidatePath("/registeredUser");
}