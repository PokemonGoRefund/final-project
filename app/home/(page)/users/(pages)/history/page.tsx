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

const ItemCart: FC = () => {
    return (
        <Box mt={'lg'}>
            <Group justify='space-between'>
                <Group>
                    <Checkbox
                    />
                    <Image src={'/SN-503.jpg'} w={160} h={160} />
                    <Stack>
                        <Text>
                            MS-503 MS Polymer Adhesive / Sealant
                        </Text>
                        <Text>
                            MS-503 is based upon Hybrid Silyl Modified Polyether Technology.

                        </Text>
                    </Stack>
                </Group>
                <Box>
                    <Center>
                        <Text fw={600}>
                            Total: 20
                        </Text>
                    </Center>
                </Box>
            </Group>
        </Box>
    )
}

const History: FC = () => {
    const { data: session } = useSession();
    console.log("test session:", session)

    if (!(session?.user.role === 'user')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Order history'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                <Group justify='flex-end'>
                    <Autocomplete
                        leftSection={<IconSearch />}
                        placeholder="Search"
                        data={['1', '2', '3', '4']}
                    />
                </Group>
                <Group justify='space-between' mt={'lg'}>
                    <Box>
                        <Group>
                            <Text fw={600}>Order Number :</Text>
                            <Text>xxxxxx</Text>
                        </Group>
                        <Group>
                            <Text fw={600}>Seller name :</Text>
                            <Text>xxxxxx</Text>
                        </Group>
                    </Box>
                    <Group>
                        <Group>
                            <Text fw={600}>
                                Order Total:
                            </Text>
                            <Text>
                                xx
                            </Text>
                        </Group>
                        <Button>
                            <Text>
                                Buy Again
                            </Text>
                        </Button>
                        <Button bg={'#79ADEB'}>
                            <Text>
                                Contact Seller
                            </Text>
                        </Button>
                    </Group>
                </Group>
                <Stack gap={'lg'}>
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                </Stack>
            </AppPageSectionBox>
        </Stack>
    )
};

export default History;