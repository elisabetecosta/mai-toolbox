import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export default {
    // pages: {
    //     signIn: "/login",
    // },
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                if (token.sub) {
                    session.user.id = token.sub;

                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
                }
            }

            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) token.sub = user.id;
            return token;
        },
    },
    session: { strategy: "jwt" },
    adapter: FirestoreAdapter(adminDb),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
} satisfies NextAuthConfig;