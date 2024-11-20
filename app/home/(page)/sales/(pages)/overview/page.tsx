"use client"

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Box, Button, Center, Grid, GridCol, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import { DateInput } from "@mantine/dates";
import '@mantine/charts/styles.css';
import AppBoxLight from "@/ui/AppBoxLight/AppBoxLight";
import { AreaChart, BarChart, LineChart } from "@mantine/charts";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { dataAChart, dataBChart } from "@/app/data/admin/overview/Chart";
import { IconCalendarTime } from "@tabler/icons-react";

export type PreviousProps = {
    title: string;
    text: string;
    des?: string;
}

const Previous: FC<PreviousProps> = (props) => {
    const title = props.title;
    const text = props.text;
    const des = props.des || 'previous 30 month';

    return (
        <AppPageSectionBox bg={'rgb(250,204,205)'} p={'md'}>
            <Stack>
                <Text>{title}</Text>
                <Center>
                    <Text fw={800} fz={'xl'}>{text}</Text>
                </Center>
                <Center>
                    <Text c={'dimmed'}>{des}</Text>
                </Center>
            </Stack>
        </AppPageSectionBox>
    );
}

const Date: FC = () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
        <DateInput
            value={value}
            onChange={setValue}
            label={<Text >Date input</Text>}
            placeholder="Date input"
            rightSection={<IconCalendarTime/>}
        />
    );
}

const AChart: FC = () => {
    return (
        <LineChart
            h={300}
            data={dataAChart}
            dataKey="date"
            series={[
                { name: 'Apples', color: 'indigo.6' },
                { name: 'Oranges', color: 'blue.6' },
                { name: 'Tomatoes', color: 'teal.6' },
            ]}
            curveType="linear"
            tickLine="xy"
        />
    );
}

const BChart: FC = () => {
    return (
        <BarChart
            h={300}
            data={dataBChart}
            dataKey="month"
            series={[
                { name: 'Smartphones', color: 'violet.6' },
                { name: 'Laptops', color: 'blue.6' },
                { name: 'Tablets', color: 'teal.6' },
            ]}
            tickLine="y"
        />
    );
}

const Overview: FC = () => {
    const { data: session } = useSession();
    console.log("test session:", session)

    if (!(session?.user.role === 'sale')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Overview'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <Grid gutter={'xl'}>
                    <GridCol span={3}>
                        <Date />
                    </GridCol>
                    <GridCol span={12}>
                        <SimpleGrid cols={4}>
                            <Previous title="Total Accounts" text="200" />
                            <Previous title="Orders per Month" text="80" />
                            <Previous title="Target" text="600,000" />
                            <Previous title="Growth Rate" text="10%" />
                        </SimpleGrid>
                    </GridCol>
                    <GridCol span={12}>
                        <SimpleGrid cols={2}>
                            <AChart />
                            <BChart />
                        </SimpleGrid>
                    </GridCol>
                </Grid>
            </AppPageSectionBox>
        </Stack>
    )
};

export default Overview;