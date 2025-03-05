'use client'

import { IconBookmark, IconCreditCardPay, IconHeart, IconMinus, IconPlus, IconShare, IconShoppingCart } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem,
    Box,
    SimpleGrid,
    Grid,
    Stack,
    Space,
    Button,
    Tabs,
} from '@mantine/core';
import classes from './ProductDetail.module.css';
import { Carousel } from '@mantine/carousel';
import { FC, useState } from 'react';
import { ProductListBlog } from '../ProductListBlog/ProductListBlog';

const PerviewPic: FC = () => {
    return (
        <Carousel
            withIndicators
            height={200}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
        >
            <Carousel.Slide><Image src={'/SN-503.jpg'} w={'80px'} h={'80px'} /></Carousel.Slide>
            <Carousel.Slide><Image src={'/SN-503.jpg'} w={'80px'} h={'80px'} /></Carousel.Slide>
            <Carousel.Slide><Image src={'/SN-503.jpg'} w={'80px'} h={'80px'} /></Carousel.Slide>
            <Carousel.Slide><Image src={'/SN-503.jpg'} w={'80px'} h={'80px'} /></Carousel.Slide>
        </Carousel>
    );
}

const TabForMore: FC = () => {
    return (
        <Tabs color="red" defaultValue="feature" mt={'xl'}>
            <Tabs.List grow>
                <Tabs.Tab value="feature">
                    <Text fz={'24px'} fw={600}>FEATURE</Text>
                </Tabs.Tab>
                <Tabs.Tab value="specification">
                    <Text fz={'24px'} fw={600}>Key Specification</Text>
                </Tabs.Tab>
                <Tabs.Tab value="box">
                    <Text fz={'24px'} fw={600}>What's In the Box</Text>
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="feature">
                FEATURE tab content
            </Tabs.Panel>

            <Tabs.Panel value="specification">
                Key Specification tab content
            </Tabs.Panel>

            <Tabs.Panel value="box">
                What's In the Box tab content
            </Tabs.Panel>
        </Tabs>
    );
}

export function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    return (
        <Box>
            <Grid>
                <Grid.Col span={5}>
                    <Center>
                        <Image src={'/SN-503.jpg'} w={'300px'} h={'300px'} />
                    </Center>
                    <PerviewPic />
                </Grid.Col>
                <Grid.Col span={7}>
                    <Stack>
                        <Text>
                            B2 Premium White Lithium Grease
                        </Text>
                        <Space h="md" />
                        <Text c={'red'}>
                            NLGI 2 white
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            CATEGORIES:
                        </Text>
                        <Text>
                            ยางรถยนต์, สเปรย์กระป๋อง
                        </Text>
                        <Text>
                            FEATURE:
                        </Text>
                        <Text>
                            PRODUCT SIZE:
                        </Text>
                        <Text>
                            กระป๋องสเปรย์, กระปุกพลาสติก, แพ๊คการ์ด
                        </Text>
                        <Box bg={'lightgrey'} p={'0 12px'}>
                            <Group justify='space-between'>
                                <Text c={'red'} fz={'24px'} fw={600}>฿495</Text>
                                <Text>ลัง / ชิ้น</Text>
                            </Group>
                        </Box>
                        <Group gap='xl'>
                            <Text c={'dimmed'}>ปริมาณ</Text>
                            <Group>
                                <ActionIcon size='lg' variant='outline' color={'red'} onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                                    <IconMinus size='1rem' color={'red'} />
                                </ActionIcon>
                                <Text>{quantity}</Text>
                                <ActionIcon size='lg' variant='outline' color={'red'} onClick={() => setQuantity((q) => q + 1)}>
                                    <IconPlus size='1rem' color={'red'} />
                                </ActionIcon>
                            </Group>
                        </Group>
                        <Group>
                            <Button color={'red'} variant='outline'>
                                <Text>ใส่ตะกร้า</Text>
                            </Button>
                            <Button bg={'red'}>
                                <Text>ซื้อสินค้า</Text>
                            </Button>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
            <TabForMore />
            <Center mt={'xl'}>
                <Text>
                    สินค้าที่เกี่ยวข้อง
                </Text>
            </Center>
            <Center mt={'xl'}>
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
        </Box>
    );
}