'use client';

import {FC, ReactNode} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Anchor, Breadcrumbs, Divider, Stack, TextProps, Title, Text, Group, VisuallyHidden, Button} from '@mantine/core';

function toCamelCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

type AppPageHeaderProps = {
    title: string;
    sectionRight?: ReactNode
}

const AppPageHeader: FC<AppPageHeaderProps> = (props) => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter((item) => item !== '');

    return (
        <Stack px={'md'} mt={'sm'} gap={0}>
            <Group gap={'xs'} justify='space-between'>
                <Title order={1}>{props.title}</Title>
                {props.sectionRight}
            </Group>
            <Divider variant={'dotted'}/>
            <Group>
                {
                    pathname && (
                        <Breadcrumbs mb={'sm'} mt={4} separatorMargin={4}>
                            {
                                pathname.split('/')
                                    .filter((item) => item !== '')
                                    .map((x) => ({title: toCamelCase(x), href: x === 'home' ? '/home' : `/home/${x}`}))
                                    .map((x) => (
                                        <Anchor key={x.title} href={x.href} size={'sm'} fw={500} c={'rgb(242,108,111)'}>
                                            {x.title}
                                        </Anchor>
                                    ))
                            }
                        </Breadcrumbs>
                    )
                }
            </Group>
        </Stack>
    );
}

export default AppPageHeader;
