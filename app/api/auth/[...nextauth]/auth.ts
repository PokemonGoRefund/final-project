import NextAuth, {
    AuthOptions,
    DefaultSession,
    getServerSession,
    Session,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import {JWT} from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        // sale: {
        //     /** The sale's role. */
        //     id?: string;
        //     role?: string;
        //     hn?: string;
        // } & DefaultSession["user"];
        
        user: {
            /** The user's role. */
            id?: string;
            role?: string;
            hn?: string;
        } & DefaultSession["user"];
    }

    // interface Sale {
    //     /** The sale's role. */
    //     id?: string;
    //     role?: string;
    //     sn?: string;
    // }

    interface User {
        /** The user's role. */
        id?: string;
        role?: string;
        hn?: string;
    }
}

const users = [
    {
        id: "1",
        email: "a",
        password: "1234",
        role: "admin",
    },
    {
        id: "S001",
        email: "s1",
        password: "1234",
        role: "sale",
        hn: "678933"
    },
    {
        id: "S002",
        email: "s2",
        password: "1234",
        role: "sale",
        hn: "239871"
    },
    {
        id: "P001",
        email: "p1",
        password: "1234",
        role: "user",
        hn: "539871"
    },
    {
        id: "P002",
        email: "p2",
        password: "1234",
        role: "user",
        hn: "008155"
    },
]

export const authOptions = {
    pages: {
        signIn: "/",
        signOut: "/",
        error: "/",
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {

                const user = users.find((u) => u.email === credentials?.email && u.password === credentials?.password)

                if (user) {
                    return user
                }

                return null;
            }
        })
    ],
    // session: {
    //     strategy: "jwt",
    // },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({user, token}) => {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.hn = user.hn;
            }
            return token;
        },
        session: async ({session, token}) => {
            if (token && typeof token === "object" && "role" in token) {
                // @ts-ignore
                session.user['id'] = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.image as string | undefined;
                session.user.role = token.role as string | undefined;
                session.user.hn = token.hn as string | undefined;
            }
            return session;
        }
    },

    // callbacks: {
    //     jwt: async ({user, token, account, profile}) => {

    //         if (account?.provider === 'credentials') {
    //             token.sub = user.id;
    //             token.name = '---';
    //             token.email = user.email;
    //             token.accessToken = (user as any).jwt;
    //         }
    //         console.log(token)
    //         return Promise.resolve(token);
    //     },
    //     session: async ({session, token}) => {
    //         const newSession = {
    //             ...session,
    //             id: token.sub!,
    //             name: token.name!,
    //             email: token.email!,
    //             accessToken: token.accessToken as string,
    //             groups: token.groups as string[] || [],
    //         };
    //         return Promise.resolve(newSession);
    //     },
    //     // redirect: async (data) => {
    //     //     return Promise.resolve('/home/admins');

    //     // },
    // },
} satisfies AuthOptions;

export const AppGetServerSession = () => getServerSession(authOptions);
export default NextAuth(authOptions);
