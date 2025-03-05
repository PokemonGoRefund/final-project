'use client'

import AppPageContainer from "@/ui/AppPageContainer/AppPageContainer";
import AppPageHeader from "@/ui/AppPageHeader/AppPageHeader";
import AppPageSectionBox from "@/ui/AppPageSectionBox/AppPageSectionBox";
import { Autocomplete, Box, Button, Center, Grid, GridCol, Group, Image, Pagination, ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import { FC, useState } from "react";
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import '@mantine/carousel/styles.css';
import { Carousel } from "@mantine/carousel";
import { ProductListBlog } from "../../../component/ProductListBlog/ProductListBlog";
import { IconSearch } from "@tabler/icons-react";

const images = [
    '/SN-503.jpg',
    '/SN-503.jpg',
    '/SN-503.jpg',
    '/SN-503.jpg',
    '/SN-503.jpg',
];

const PicSlide: FC = () => {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Center>
                <Image src={url} w={'800px'} h={'250px'} />
            </Center>
        </Carousel.Slide>
    ));

    return <Carousel withIndicators>{slides}</Carousel>;
}

const SearchProduct: FC = () => {
    return (
        <Group>
            <Autocomplete
                leftSection={<IconSearch />}
                label={'อุตสาหกรรม'}
                placeholder="ทุกหมวดหมู่"
                data={['1', '2', '3', '4']}
            />
            <Autocomplete
                leftSection={<IconSearch />}
                label={'ประเภทการใช้งาน'}
                placeholder="ทุกประเภท"
                data={['1', '2', '3', '4']}
            />
            <Autocomplete
                leftSection={<IconSearch />}
                label={'ขนาดผลิตภัณฑ์'}
                placeholder="ทุกผลิตภัณฑ์ทุกขนาด"
                data={['1', '2', '3', '4']}
            />
        </Group>

    )
}

const Category: FC = () => {
    const { data: session } = useSession();
    // console.log("test session:", session)

    if (!(session?.user.role === 'user')) redirect('/');

    return (
        <Stack pt={'xl'}>
            <AppPageSectionBox>
                <AppPageHeader title={'Category'} />
            </AppPageSectionBox>
            <AppPageSectionBox p={'lg'}>
                {/* <PicSlide /> */}
                <SearchProduct/>
                <Stack mt={'lg'}>
                    {/* <Group justify='flex-end'>
                        <Autocomplete
                            leftSection={<IconSearch />}
                            placeholder="Search"
                            data={['1', '2', '3', '4']}
                        />
                    </Group> */}
                    <Group justify='space-between'>
                        <Text fw={600}>Product type</Text>
                        <Text fw={600} c={'#79ADEB'}>{'See all >>'}</Text>
                    </Group>
                    {/* <ScrollArea h={400} type="never" offsetScrollbars>
                        <Group>
                            <ProductListBlog />
                            <ProductListBlog />
                            <ProductListBlog />
                            <ProductListBlog />
                            <ProductListBlog />
                            <ProductListBlog />
                        </Group>
                    </ScrollArea> */}
                    <Center>
                        <Carousel
                            withIndicators
                            w={1080}
                            height={400}
                            slideSize="33.333333%"
                            slideGap="md"
                            loop
                            align="start"
                            slidesToScroll={3}
                        >
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                        </Carousel>
                    </Center>
                    <Space h="md" />
                    <Group justify='space-between'>
                        <Text fw={600}>Product type</Text>
                        <Text fw={600} c={'#79ADEB'}>{'See all >>'}</Text>
                    </Group>
                    {/* <Group>
                        <ProductListBlog />
                        <ProductListBlog />
                        <ProductListBlog />
                    </Group> */}
                    <Center>
                        <Carousel
                            withIndicators
                            w={1080}
                            height={400}
                            slideSize="33.333333%"
                            slideGap="md"
                            loop
                            align="start"
                            slidesToScroll={3}
                        >
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                        </Carousel>
                    </Center>
                    <Group justify='space-between'>
                        <Text fw={600}>Product type</Text>
                        <Text fw={600} c={'#79ADEB'}>{'See all >>'}</Text>
                    </Group>
                    {/* <Group>
                        <ProductListBlog />
                        <ProductListBlog />
                        <ProductListBlog />
                    </Group> */}
                    <Center>
                        <Carousel
                            withIndicators
                            w={1080}
                            height={400}
                            slideSize="33.333333%"
                            slideGap="md"
                            loop
                            align="start"
                            slidesToScroll={3}
                        >
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <ProductListBlog />
                            </Carousel.Slide>
                        </Carousel>
                    </Center>
                </Stack>
            </AppPageSectionBox>
        </Stack>
    )
};

export default Category;