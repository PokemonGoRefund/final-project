// import "@mantine/core/styles.css";
import '../layout.css';

import React from "react";
// import {AppGetServerSession} from '../api/auth/[...nextauth]/auth';
import { redirect } from 'next/navigation';
import HomeNavbar from './HomeLayout';
import { Container, Flex } from '@mantine/core';
import SessionChecker from '../SessionChecker';

// export const metadata = {
//     title: "Mantine Next.js template",
//     description: "I am using Mantine with Next.js!",
// };

export default async function HomeLayout({ children }: { children: any }) {
    return (
        <>
            {/* <SessionChecker /> */}
            <HomeNavbar>
                {children}
            </HomeNavbar>
            {/*{children}*/}
            {/*<pre>*/}
            {/*    {JSON.stringify(session, null, 2)}*/}
            {/*</pre>*/}
        </>
    );
}
