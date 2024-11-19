'use client';

import {ReactNode, useState} from 'react';
import NextImage from 'next/image';
import {
    Group,
    Code,
    AppShell,
    Burger,
    Image,
    ScrollArea,
    Button,
    Divider,
    AspectRatio,
    Text,
    Stack, UnstyledButton, Box
} from '@mantine/core';
import {
    IconDashboard,
    IconUserHeart,
    IconCalendarDue
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HomeLayout.module.css';
import {FC} from 'react';
import {useDisclosure} from '@mantine/hooks';
import {signOut} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";

const data = [
    {link: '/home/dashboard', label: 'Dashboard', icon: IconDashboard},
    {link: '/home/patients', label: 'Patients', icon: IconUserHeart},
    // {link: '/home/chat', label: 'Chat', icon: IconMessageChatbot},
    // { link: '/home/follow', label: 'Follow Up', icon: IconMoodSearch },
    {link: '/home/calendar', label: 'Calendar', icon: IconCalendarDue},
];

export type HomebarProps = { children?: ReactNode };

const Homebar: FC<HomebarProps> = ({children}) => {
    const router = useRouter();
    const [active, setActive] = useState('Billing');
    const [opened, {toggle}] = useDisclosure();

    const links = data.map((item) => (
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
            <item.icon className={classes.linkIcon} stroke={1.5}/>
            <span>{item.label}</span>
        </a>
    ));

    return (
        <AppShell
            // header={{height: 60}}
            header={
                {
                    height: 60,
                }
            }
            // navbar={{
            //     width: 250,
            //     breakpoint: 'sm',
            //     collapsed: { mobile: !opened },
            // }}
            // navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            // bg={'#F9FAFB'}
            bg={'#F5F5F5'}
            // bg={'#E0E0E0'}
        >
            <AppShell.Header>
                <Group mx={'xl'} h={'100%'}>
                    {/*<Burger*/}
                    {/*    opened={opened}*/}
                    {/*    onClick={toggle}*/}
                    {/*    size="sm"*/}
                    {/*    color={'var(--mantine-primary-color-5)'}*/}
                    {/*/>*/}
                    {/*<AspectRatio ratio={1200 / 390} maw={150}>*/}
                    {/*    <Image component={NextImage} src={'/logo.png'} alt='BDMS' width={100} height={33}/>*/}
                    {/*</AspectRatio>*/}
                    <Box></Box>
                    <Text ml={'xl'} fw={600} size={'xl'}>XTRASEAL</Text>
                    {/* <Image src={'/LOGO_XTRASEAL.jpg'} h={'120px'}/> */}
                    {/* <Text ml={0} fw={400} size={'xl'}>Colorectal Cancel</Text> */}
                </Group>
            </AppShell.Header>

            {/*<AppShell.Navbar p="md">*/}
            {/*    <AppShell.Section>*/}
            {/*        <AspectRatio ratio={1200 / 390} maw={150} mx={'auto'}>*/}
            {/*            <Image component={NextImage} src={'/BDMS_Bangkok_Dusit_Medical_Services.png'} alt='BDMS' width={150} height={49} />*/}
            {/*        </AspectRatio>*/}
            {/*    </AppShell.Section>*/}
            {/*    <Divider my={'lg'} visibleFrom={'md'} variant={'dashed'} size={'xs'} />*/}
            {/*    <AppShell.Section grow mb="md" component={ScrollArea}>*/}

            {/*        <div className={classes.navbarMain}>*/}
            {/*            /!*<Group className={classes.header} justify="space-between">*!/*/}
            {/*            /!*    /!*<MantineLogo size={28} />*!/*!/*/}
            {/*            /!*    <Code fw={700}>v3.1.2</Code>*!/*/}
            {/*            /!*</Group>*!/*/}
            {/*            /!* {links} *!/*/}
            {/*        </div>*/}

            {/*    </AppShell.Section>*/}
            {/*    /!* <AppShell.Section mb={20}>*/}
            {/*        <Group>*/}
            {/*            <Image*/}
            {/*                src={'/portrait-3d-female-doctor.jpg'}*/}
            {/*                h={64} w={64} radius={'lg'} alt='doctor'*/}
            {/*            />*/}
            {/*            <Stack gap={4}>*/}
            {/*                <Text fz={16} fw={800}>Dr. Stone</Text>*/}
            {/*                <Text fz={12}>Doctors Specialist</Text>*/}
            {/*            </Stack>*/}
            {/*        </Group>*/}
            {/*    </AppShell.Section> *!/*/}
            {/*    <Divider h={'md'} />*/}
            {/*    <AppShell.Section>*/}
            {/*        <Button leftSection={<IconLogout2 />} variant={'outline'} fullWidth onClick={() => signOut()}>Logout</Button>*/}
            {/*    </AppShell.Section>*/}

            {/*    /!*<nav className={classes.navbar}>*!/*/}
            {/*    /!*    <div className={classes.navbarMain}>*!/*/}
            {/*    /!*        <Group className={classes.header} justify="space-between">*!/*/}
            {/*    /!*            /!*<MantineLogo size={28} />*!/*!/*/}
            {/*    /!*            <Code fw={700}>v3.1.2</Code>*!/*/}
            {/*    /!*        </Group>*!/*/}
            {/*    /!*        {links}*!/*/}
            {/*    /!*    </div>*!/*/}

            {/*    /!*    <div className={classes.footer}>*!/*/}
            {/*    /!*        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>*!/*/}
            {/*    /!*            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5}/>*!/*/}
            {/*    /!*            <span>Change account</span>*!/*/}
            {/*    /!*        </a>*!/*/}

            {/*    /!*        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>*!/*/}
            {/*    /!*            <IconLogout className={classes.linkIcon} stroke={1.5}/>*!/*/}
            {/*    /!*            <span>Logout</span>*!/*/}
            {/*    /!*        </a>*!/*/}
            {/*    /!*   </div>*!/*/}
            {/*    /!*</nav>*!/*/}

            {/*</AppShell.Navbar>*/}

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}

export default Homebar;
