"use client";

import { useFormik } from 'formik'
import * as Yup from "yup";
import React from 'react'
import { User } from '../types'
import { registerUser } from '../actions/user.actions';

const Page = () => {
    const formik = useFormik<User>({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Firstname is required"),
            lastname: Yup.string().required("Lastname is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
        }),
        onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
            setStatus(null);
            try {
                await registerUser(values);
                resetForm();
                setStatus({ success: true, message: "User registered successfully" });
            } catch (error) {
                setStatus({ success: false, message: "Failed to register user" });
            } finally {
                setSubmitting(false);

            }
        }
    })
    return (
        <div className="flex h-screen justify-center items-center px-5">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3 flex-col gap-4 flex justify-center"
            >
                <h1 className="text-center text-2xl font-bold">Register Here</h1>

                {formik.status && (
                    <p
                        className={`text-center text-sm ${!formik.status.success ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {formik.status.message}
                    </p>
                )}

                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <br />
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        className="border p-2 w-full rounded-sm"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstname && formik.errors.firstname && (
                        <p className="text-red-600 text-sm">{formik.errors.firstname}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <br />
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        className="border p-2 w-full rounded-sm"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastname && formik.errors.lastname && (
                        <p className="text-red-600 text-sm">{formik.errors.lastname}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                        id="email"
                        type="text"
                        name="email"
                        className="border p-2 w-full rounded-sm"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-sm">{formik.errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="border p-2 w-full rounded-sm"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-600 text-sm">{formik.errors.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="py-2 bg-black text-white rounded-sm transition delay-150 disabled:opacity-50"
                >
                    {formik.isSubmitting ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    )
}

export default Page