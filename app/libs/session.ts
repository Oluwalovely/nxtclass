import "server-only";
import { jwtVerify, SignJWT } from "jose";

const secretKey = process.env.AUTH_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: { id: string }) => {
    const token = new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("5h")
        .sign(encodedKey);

    return token;
};

export const decrypt = async (token: Promise<string>) => {
    try {
        const payload = await jwtVerify((await token).toString(), encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log(error);

        return{
            status: 401,
            message: "User Unauthorized"
        }
        
     }
};
