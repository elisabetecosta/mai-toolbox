import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export const config = {
    matcher: '/ghostpage' //temporary fix to avoid middleware errors
};