"use client"

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Box, Button, Center, Grid, GridCol, Group, Pagination, SimpleGrid, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import { DateInput } from "@mantine/dates";
import '@mantine/charts/styles.css';
import AppBoxLight from "@/ui/AppBoxLight/AppBoxLight";
import { AreaChart, BarChart, LineChart } from "@mantine/charts";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { dataAChart, dataBChart } from "@/app/data/admin/overview/Chart";
import NotificationListTable from "../../../component/NotificationListTable/NotificationListTable";

const Notification: FC = () => {
    const { data: session } = useSession();
    console.log("test session:", session)

    if (!(session?.user.role === 'admin')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Notification'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <NotificationListTable />
            </AppPageSectionBox>
            <AppPageSectionBox>
                <Group my={'xs'} mx={'lg'} justify={'space-between'}>
                    <Group gap={4} align={'end'}>
                        <Text size={'xs'}>12</Text>
                        <Text size={'xs'} c={'dimmed'}>results found</Text>
                    </Group>
                    <Pagination total={10} size="md" radius="md" withEdges
                        color='rgb(242,108,111)'
                        styles={{
                            'control': {
                                'border': '1px solid #FFFFFF',
                                'color': 'var(--mantine-color-gray-8)',
                                '&:active, &:focus': {
                                    color: 'white',
                                },
                            },

                        }}
                    />
                </Group>
            </AppPageSectionBox>
        </Stack>
    )
};

export default Notification;