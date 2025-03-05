'use client'

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Autocomplete, Box, Button, Center, Checkbox, Grid, GridCol, Group, Image, Pagination, SimpleGrid, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";
import { ProductDetail } from "@/app/home/(page)/component/ProductDetail/ProductDetail";

const ItemCart: FC = () => {
    return (
        <Box mt={'lg'}>
            
        </Box>
    )
}

const Detail: FC = () => {
    const { data: session } = useSession();

    if (!(session?.user.role === 'user')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Detail'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <ProductDetail/>
            </AppPageSectionBox>
        </Stack>
    )
};

export default Detail;