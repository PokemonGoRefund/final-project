'use client';

import { ReactNode, useState } from 'react';
import NextImage from 'next/image';
import { Group, Code, AppShell, Burger, Image, ScrollArea, Button, Divider, AspectRatio, Text, Stack } from '@mantine/core';
import {
    IconProps,
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconMessageChatbot, IconUsers, IconDashboard, IconUserHeart, IconLogout2, IconFocus2, IconMoodSearch, IconCalendarDue,
    IconShoppingCart,
    IconHistory,
    IconUser,
    IconUserCode,
    IconCreditCard,
    IconCategory,
    IconHeartHandshake
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HomeLayout.module.css';
import { FC } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AppPageContainer from '@/ui/AppPageContainer/AppPageContainer';

type NavLink = {
    label: string;
    link?: string; // Optional for dropdowns
    icon: FC<IconProps>; // Tabler icons are functional components
    links?: { label: string; link: string }[]; // For dropdowns
};

const dataAdmin = [
    { link: '/home/admins/overview', label: 'Overview', icon: IconDashboard },
    { link: '/home/admins/product', label: 'Product Management', icon: IconShoppingCart },
    { link: '/home/admins/notification', label: 'Notification', icon: IconBellRinging },
    { link: '/home/admins/history', label: 'History', icon: IconHistory },
    { link: '/home/admins/userManage', label: 'User Management', icon: IconUsers },
    { link: '/home/admins/saleManage', label: 'Sales Management', icon: IconUserCode },
];

const dataSale = [
    { link: '/home/sales/overview', label: 'Overview', icon: IconDashboard },
    { link: '/home/sales/notification', label: 'Notification', icon: IconBellRinging },
    { link: '/home/sales/history', label: 'History', icon: IconHistory },
    { link: '/home/sales/userManage', label: 'User Management', icon: IconUsers },
];

const dataUser = [
    { link: '/home/users/category', label: 'Category', icon: IconCategory },
    { link: '/home/users/history', label: 'History', icon: IconHistory },
    { link: '/home/users/purchase', label: 'Purchase', icon: IconCreditCard },
    { link: '/home/users/cart', label: 'Cart', icon: IconShoppingCart },
];

// const dataUser: NavLink[] = [
//     { link: '/home/users/category', label: 'Category', icon: IconCategory },
//     { link: '/home/users/history', label: 'History', icon: IconHistory },
//     { link: '/home/users/purchase', label: 'Purchase', icon: IconCreditCard },
//     { link: '/home/users/cart', label: 'Cart', icon: IconShoppingCart },
//     {
//       label: 'Support',
//       icon: IconHeartHandshake,
//       links: [
//         { label: 'How to order', link: '/' },
//         { label: 'Contact us', link: '/' },
//         { label: 'Shipping', link: '/' },
//         { label: 'Quotation', link: '/' },
//         { label: 'About us', link: '/' },
//         { label: 'Account', link: '/' },
//       ],
//     },
//   ];

export type HomeNavbarProps = { children?: ReactNode };

const HomeNavbar: FC<HomeNavbarProps> = ({ children }) => {
    const [active, setActive] = useState('Billing');
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();

    const { data: session } = useSession();

    // ตรวจสอบบทบาทผู้ใช้
    const links =
        session?.user.role === 'admin'
            ? dataAdmin
            : session?.user.role === 'sale'
                ? dataSale
                : dataUser;

    const renderedLinks = links.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
                router.push(item.link);
                toggle();
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        // <nav className={classes.navbar}>
        //     <div className={classes.navbarMain}>
        //         <Group className={classes.header} justify="space-between">
        //             {/*<MantineLogo size={28} />*/}
        //             <Code fw={700}>v3.1.2</Code>
        //         </Group>
        //         {links}
        //     </div>
        //
        //     <div className={classes.footer}>
        //         <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
        //             <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5}/>
        //             <span>Change account</span>
        //         </a>
        //
        //         <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
        //             <IconLogout className={classes.linkIcon} stroke={1.5}/>
        //             <span>Logout</span>
        //         </a>
        //     </div>
        // </nav>

        <AppShell
            // header={{height: 60}}
            header={
                {
                    height: { base: 60, md: 0, sm: 60, xs: 60 },
                }
            }
            navbar={{
                width: 250,
                breakpoint: 'md',
                collapsed: { mobile: !opened },
            }}
            // padding="md"
            bg={'#F9FAFB'}
        >
            <AppShell.Header hiddenFrom={'md'}>
                <Group mx={'xl'} h={'100%'}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="md"
                        size="sm"
                        color={'var(--mantine-primary-color-5)'}
                    />
                    <AspectRatio ratio={1200 / 390} maw={150}>
                        <Image src={'/LOGO_XTRASEAL.jpg'} alt='XTRASEAL' width={100} height={33} />
                    </AspectRatio>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <AppShell.Section visibleFrom={'md'}>
                    <AspectRatio ratio={1200 / 390} maw={150} mx={'auto'}>
                        <Image src={'/LOGO_XTRASEAL.jpg'} alt='XTRASEAL' width={150} height={49} />
                    </AspectRatio>
                </AppShell.Section>
                <Divider my={'lg'} visibleFrom={'md'} variant={'dashed'} size={'xs'} />
                <AppShell.Section grow mb="md" component={ScrollArea}>

                    <div className={classes.navbarMain}>
                        {/*<Group className={classes.header} justify="space-between">*/}
                        {/*    /!*<MantineLogo size={28} />*!/*/}
                        {/*    <Code fw={700}>v3.1.2</Code>*/}
                        {/*</Group>*/}
                        {renderedLinks}
                    </div>

                </AppShell.Section>
                <AppShell.Section mb={20}>
                    <Group>
                        <Image
                            h={64} w={64} radius={'lg'} alt='Picture'
                        />
                        <Stack gap={4}>
                            <Text fz={16} fw={800}>Mr. Stone</Text>
                            <Text fz={12}>Master Specialist</Text>
                        </Stack>
                    </Group>
                </AppShell.Section>
                <Divider h={'md'} />
                <AppShell.Section>
                    <Button leftSection={<IconLogout2 />} color='rgb(242,108,111)' variant={'outline'} fullWidth onClick={() => signOut()}>Logout</Button>
                </AppShell.Section>

                {/*<nav className={classes.navbar}>*/}
                {/*    <div className={classes.navbarMain}>*/}
                {/*        <Group className={classes.header} justify="space-between">*/}
                {/*            /!*<MantineLogo size={28} />*!/*/}
                {/*            <Code fw={700}>v3.1.2</Code>*/}
                {/*        </Group>*/}
                {/*        {links}*/}
                {/*    </div>*/}

                {/*    <div className={classes.footer}>*/}
                {/*        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>*/}
                {/*            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5}/>*/}
                {/*            <span>Change account</span>*/}
                {/*        </a>*/}

                {/*        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>*/}
                {/*            <IconLogout className={classes.linkIcon} stroke={1.5}/>*/}
                {/*            <span>Logout</span>*/}
                {/*        </a>*/}
                {/*   </div>*/}
                {/*</nav>*/}

            </AppShell.Navbar>

            <AppShell.Main p={0}>
                <AppPageContainer>
                    {children}
                </AppPageContainer>
            </AppShell.Main>
        </AppShell>
    );
}

export default HomeNavbar;
