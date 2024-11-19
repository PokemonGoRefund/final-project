"use client"

import { Button, Container, LoadingOverlay, Paper, PasswordInput, Stack, TextInput, Title, } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './page.module.css';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AppPageSectionBox from '@/ui/AppPageSectionBox/AppPageSectionBox';
// import useAppStore from "@/src/store/user.store";

function LoginPage() {

    const [checking, setChecking] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    // const initDb = useAppStore((state) => state.initDb);

    // Check if user is already logged in
    const { data: session } = useSession();

    // useEffect(() => {
    //     if (session) {
    //         if (session.user.role === 'admin') {
    //             router.push('/home/admins/overview');
    //             return;
    //         }
    //         if (session.user.role === 'user') {
    //             router.push('/home/patients');
    //             return;
    //         }
    //     }
    //     setChecking(false);
    // }, [checking]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if (result?.error) {
                alert("Invalid credentials");
            } else {
                const session = await getSession();
                switch (session?.user?.role) {
                    case "admin":
                        // initDb('-');
                        router.push('/home/admins');
                        break;
                    case "sale":
                        // initDb('-');
                        router.push('/home/sales');
                        break;
                    default:
                        // initDb(session?.user?.hn!);
                        router.push('/home/users');
                        break;
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();

    //     try {
    //         const result = await signIn('credentials', {
    //             redirect: false,
    //             email,
    //             password,
    //         });
    //         if (result?.error) {
    //             alert("Invalid credentials");
    //         } else {
    //             const session = await getSession();
    //             switch (session?.user?.role) {
    //                 case "admin":
    //                     initDb('-');
    //                     router.push('/home/admins');
    //                     break;
    //                 default:
    //                     initDb(session?.user?.hn!);
    //                     router.push('/home/patients');
    //                     break;
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <Container size={800} className={classes.container}>
            {/* <LoadingOverlay visible={checking}
                zIndex={1000}
                bg={'white'}
                overlayProps={{ radius: 'sm', blur: 2 }}>
            </LoadingOverlay> */}
            <AppPageSectionBox p={'xl'} w={'600px'}>
                <Stack>
                    <Title ta="center">
                        XTRASEAL
                    </Title>
                    {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text> */}
                    <form onSubmit={handleSubmit}>
                        {/* <Paper withBorder shadow="md" p={30} mt={30} radius="md"> */}
                        <Paper>
                            {error && (
                                <>
                                    {error}
                                </>
                            )}

                            <TextInput onChange={(e) => setEmail(e.target.value)} type='text' label="Username"
                                placeholder="Your username" required />
                            <PasswordInput onChange={(e) => setPassword(e.target.value)} label="Password"
                                placeholder="Your password" required mt="md" />
                            {/* <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group> */}
                            <Button type='submit' fullWidth mt="xl" bg={'rgb(238,77,85)'}>
                                Sign in
                            </Button>
                        </Paper>
                    </form>
                </Stack>
            </AppPageSectionBox>
        </Container>
    );
}

export default LoginPage;