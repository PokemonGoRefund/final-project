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
import { AreaChart } from "@mantine/charts";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Category from "./(pages)/category/page";

const Admin: FC = () => {
    const { data: session } = useSession();

    if(!(session?.user.role === 'user')) redirect('/');

    // return redirect('/home/admins/component/overview');
    return <Category/>
};

export default Admin;