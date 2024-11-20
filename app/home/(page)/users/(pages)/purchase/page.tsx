"use client"

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Box, Button, Center, Checkbox, CheckboxCard, Grid, GridCol, Group, Input, Pagination, SimpleGrid, Space, Stack, Table, Text, Timeline } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const elements = [
    { position: 'MS-503 MS Polymer Adhesive / Sealant', mass: 1, symbol: 500, },
    { position: 'MS-503 MS Polymer Adhesive / Sealant', mass: 1, symbol: 500, },
    { position: 'MS-503 MS Polymer Adhesive / Sealant', mass: 1, symbol: 500, },
    { position: 'MS-503 MS Polymer Adhesive / Sealant', mass: 1, symbol: 500, },
    { position: 'MS-503 MS Polymer Adhesive / Sealant', mass: 1, symbol: 500, },
];

const CheakProduct: FC = () => {
    const rows = elements.map((element, index) => (
        <Table.Tr key={element.position}>
            <Table.Td>{index + 1}</Table.Td>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th><Text fw={600}>No</Text></Table.Th>
                    <Table.Th><Text fw={600}>Product name</Text></Table.Th>
                    <Table.Th><Text fw={600}>Quantity</Text></Table.Th>
                    <Table.Th><Text fw={600}>Price</Text></Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

const CheakTimeLine: FC = () => {
    return (
        <Timeline active={1} bulletSize={24} lineWidth={4}>
            <Timeline.Item>
                <Text fw={800}>Fill out Personal information.</Text>
                <Space h={'lg'} />
                <Grid mx={'xl'}>
                    <GridCol span={1}>
                        <Stack gap={'28px'}>
                            <Text fw={600}>Name</Text>
                            <Text fw={600}>Company</Text>
                            <Text fw={600}>Phone number</Text>
                            <Text fw={600}>Email</Text>
                        </Stack>
                    </GridCol>
                    <GridCol span={11}>
                        <Stack>
                            <Input placeholder="Input Name" />
                            <Input placeholder="Input Company" />
                            <Input placeholder="Input Phone number" />
                            <Input placeholder="Input Email" />
                        </Stack>
                    </GridCol>
                </Grid>
            </Timeline.Item>
            <Timeline.Item>
                <Text fw={800}>Cheak Product</Text>
                <Space h={'lg'} />
                <Box mx={'xl'}>
                    <CheakProduct />
                </Box>
            </Timeline.Item>

            <Timeline.Item>
                <Text fw={800}>Choose the quotation receipt method.</Text>
            </Timeline.Item>
        </Timeline>
    );
}

const purchase: FC = () => {
    const { data: session } = useSession();
    console.log("test session:", session)

    if (!(session?.user.role === 'user')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Purchase'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <CheakTimeLine />
                <Group justify='flex-start' mt={'lg'}>
                    <Checkbox
                        defaultChecked
                        label={<Text>Notify by email</Text>}
                    />
                    <Checkbox
                        defaultChecked
                        label={<Text>Notify by phone</Text>}
                    />
                    <Checkbox
                        defaultChecked
                        label={<Text>Notify by fex</Text>}
                    />
                </Group>
                <Group justify='flex-end' mt={'lg'}>
                    <Button>
                        <Text>
                            Send information
                        </Text>
                    </Button>
                    <Button bg={'rgb(242,108,111)'}>
                        <Text>
                            Clear Data
                        </Text>
                    </Button>
                </Group>
            </AppPageSectionBox>
        </Stack>
    )
};

export default purchase;