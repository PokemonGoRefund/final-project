"use client"

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Box, Button, Center, Grid, GridCol, Group, Pagination, SimpleGrid, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import { DateInput } from "@mantine/dates";
import '@mantine/charts/styles.css';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LineOA: FC = () => {
    const { data: session } = useSession();
    console.log("test session:", session)

    if (!(session?.user.role === 'admin')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Line OA'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <Box>
                    
                </Box>
            </AppPageSectionBox>
        </Stack>
    )
};

export default LineOA;