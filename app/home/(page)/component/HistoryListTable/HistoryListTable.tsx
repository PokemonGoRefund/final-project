'use client';

import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
    Center, CloseButton,
    Group, Input,
    Modal,
    Pill,
    rem, Select,
    Stack,
    Table,
    Text
} from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { IconFileText, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
// import { ColorText } from '../ColorText/ColorText';
import classes from '@/app/home/(page)/component/ProductListTable/ProductListTable.module.css'
import { dataHistory } from '@/app/data/admin/history/History';
// import {getPatientCaseList, updatePatientCaseStudy} from "@/src/app/db";
// import useAppStore from "@/src/store/user.store";

const HistoryListTable: FC = () => {
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [searchOrderID, setSearchOrderID] = useState<string>('');
    const [searchID, setSearchID] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const [searchType, setSearchType] = useState<string>('');
    const [searchStatus, setSearchStatus] = useState<string>('');
    const [Product, setProduct] = useState<any[]>([]);
    // const [opened, { open, close }] = useDisclosure(false);

    const router = useRouter();
    // const db = useAppStore((state) => state.db);

    // useEffect(() => {
    //     getPatientCaseList(db).then((r) => {
    //         setPatients(r as any[]);
    //     });
    // }, []);

    // ฟังก์ชันกรองข้อมูลจาก hn_id
    // const filteredProduct = dataProduct.filter((p) =>
    //     // p.patient.hn.toLowerCase().includes(searchValue.toLowerCase())
    //     p.product_id.includes(searchID)
    // );

    const filteredProduct = dataHistory.filter((p) => {
        return (
            (!searchOrderID || p.order_id.toLowerCase().includes(searchID.toLowerCase())) &&
            (!searchID || p.product_id.toLowerCase().includes(searchID.toLowerCase())) &&
            (!searchName || p.product_name.toLowerCase().includes(searchName.toLowerCase())) &&
            (!searchType || p.type.toLowerCase().includes(searchType.toLowerCase())) &&
            (!searchStatus || p.status.toLowerCase().includes(searchStatus.toLowerCase()))
        );
    });

    // กรองค่าที่ซ้ำออกจาก data ที่จะส่งให้ Autocomplete
    const uniqueOrderIds = Array.from(new Set(filteredProduct.map(product => product.order_id)));
    const uniqueProductIds = Array.from(new Set(filteredProduct.map(product => product.product_id)));
    const uniqueProductNames = Array.from(new Set(filteredProduct.map(product => product.product_name)));
    const uniqueProductTypes = Array.from(new Set(filteredProduct.map(product => product.type)));
    const uniqueProductStatuses = Array.from(new Set(filteredProduct.map(product => product.status)));

    const autocompleteData = [
        { value: searchOrderID, setValue: setSearchOrderID, data: uniqueOrderIds, placeholder: "Search Order ID" },
        { value: searchID, setValue: setSearchID, data: uniqueProductIds, placeholder: "Search Product ID" },
        { value: searchName, setValue: setSearchName, data: uniqueProductNames, placeholder: "Search Name" },
        { value: searchType, setValue: setSearchType, data: uniqueProductTypes, placeholder: "Search Type" },
        { value: searchStatus, setValue: setSearchStatus, data: uniqueProductStatuses, placeholder: "Search Status" }
    ];

    const columnName = (name: string) => <Text fw={600} ta={'center'} c='var(--mantine-color-gray-8)'>{name}</Text>;
    const columnNameAlignLeft = (name: string) => <Text fw={500} ta={'start'}
        c='var(--mantine-color-gray-8)'>{name}</Text>;


    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Wait':
                return '#E48032';
            case 'Checked':
                return '#55D6C9';
            default:
                return '#E0E0E0'; // Default color if status is neither 'Wait' nor 'Checked'
        }
    };

    const getPadding = (status: string) => {
        if (status === 'Wait') {
            return { pr: '21.62px', pl: '21.62px' };
        } else {
            return { pr: '8px', pl: '8px' };
        }
    };

    const handleSelectIndex = (index: number) => {
        setSelectedIndexes((prevIndexes) => {
            if (!prevIndexes.includes(index)) {
                return [...prevIndexes, index]; // ถ้า index ยังไม่ถูกเลือก ให้เพิ่มลงใน array
            }
            return prevIndexes; // ถ้าเลือกแล้ว ไม่ต้องเพิ่มซ้ำ
        });
    };

    type Product = {
        product_id: string;
        product_name: string;
        type: string;
        quantity: number;
        price: number;
        status: string;
    };

    const searchFields = [
        { key: 'product_id', label: 'Search Product ID', value: searchID, setValue: setSearchID },
        { key: 'product_name', label: 'Search Name', value: searchName, setValue: setSearchName },
        { key: 'type', label: 'Search Type', value: searchType, setValue: setSearchType },
        { key: 'status', label: 'Search Status', value: searchStatus, setValue: setSearchStatus }
    ];

    const PatientDetail: FC<{ hn: string }> = ({ hn }) => {
        const [opened, { open, close }] = useDisclosure(false);

        // const getDb = useAppStore(state => state.getDB);
        // const onSubmit = async () => {
        //     const db = getDb();

        //     // await updatePatientCaseStudy(db, caseInfo.id, study!, subjectId);

        //     alert('Case Added');
        //     close();
        // }

        // const handleOkClick = () => {
        //     // setPatients(dataPatientAdd);
        //     onSubmit();
        //     setSearchValue('');
        //     close();
        // };

        const handleCancelClick = () => {
            close();
        };

        return (
            <>
                <Modal opened={opened} onClose={close} title={<Text fw={800} fz={'xl'}>Patient Detail</Text>} centered>
                    <Box>
                        <Stack bg={'#F9FAFC'} style={{ border: '1px solid #E7E7E7' }} p={'md'}>
                            <Group>
                                <Text fw={600}>HN : </Text>
                                <Text>{hn}</Text>
                            </Group>
                            <Group>
                                <Text fw={600}>Patient Name : </Text>
                                <Text>MASTER</Text>
                            </Group>
                            <Group>
                                <Text fw={600}>Gender : </Text>
                                <Text>Male</Text>
                            </Group>
                            <Group>
                                <Text fw={600}>Date of Birth : </Text>
                                <Text>26/02/2008</Text>
                            </Group>
                            <Group>
                                <Text fw={600}>Age : </Text>
                                <Text>13 Y</Text>
                            </Group>
                            <Group>
                                <Text fw={600}>Study : </Text>
                                <Select
                                    withAsterisk
                                    placeholder="Pick value"
                                    // value={study}
                                    // onChange={setStudy}
                                    data={['Colorectal Cancer', 'Breast Cancer', 'Breast Cancer Pathway']}
                                />
                            </Group>
                            <Group>
                                <Text fw={600}>Study subject ID : </Text>
                                <Input
                                    // value={subjectId}
                                    // onChange={(event) => setSubjectId(event.currentTarget.value)}
                                    rightSectionPointerEvents="all"
                                    rightSection={
                                        <CloseButton
                                            aria-label="Clear input"
                                        // onClick={() => setValue('')}
                                        // style={{display: value ? undefined : 'none'}}
                                        />
                                    }
                                />
                            </Group>
                        </Stack>
                        <Center mt={'md'}>
                            <Group>
                                <Button
                                    bg={'lightgrey'}
                                    onClick={handleCancelClick}
                                >
                                    <Text>Cancel</Text>
                                </Button>
                                <Button
                                // onClick={handleOkClick}
                                >
                                    <Text>OK</Text>
                                </Button>
                            </Group>
                        </Center>
                    </Box>
                </Modal>
                <Button
                    // onClick={() => alert("No results found")}
                    onClick={open}
                    disabled={searchID === ''}
                >
                    <Text>Add Product</Text>
                </Button>
            </>
        );
    }

    const rows = filteredProduct.map((row, index) => {


        // const isSelected = selectedIndexes.includes(index);
        // const isModalOpen = openedIndex === index;

        // const badgeColor = (symptom: string) => {
        //     return 'cyan.5';
        // };

        // const { pr, pl } = getPadding(row.status);

        return (
            <Table.Tr key={row.product_id}
                className={classes.hover_row}
            >
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{index + 1}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{row.order_id}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{row.product_id}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.product_name}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.type}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.quantity}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.price}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Pill>
                            <Text
                                c={row.status === "Succeed"
                                    ? '#00C681'
                                    : row.status === "Delivery"
                                        ? '#05AACD'
                                        : 'black'}
                            >
                                {row.status}
                            </Text>
                        </Pill>
                    </Center>
                </Table.Td>
            </Table.Tr >
        );
    });

    return (
        <Table.ScrollContainer minWidth={800}>
            {/* <Group mb={'lg'} mx={'lg'} justify={'space-between'}> */}
            <Group mb={'lg'} grow>
                {autocompleteData.map((item, index) => (
                    <Autocomplete
                        key={index}
                        className={classes.search}
                        placeholder={item.placeholder}
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        value={item.value}
                        onChange={(value) => item.setValue(value)}
                        data={item.data}
                    />
                ))}
            </Group>
            {/* {filteredPatients.length === 0 && (
                    <PatientDetail hn={searchValue} />
                )} */}
            {/* {searchValue === '' && (
                    <PatientDetail hn={searchValue} />
                )} */}
            {/* <PatientDetail hn={searchID} /> */}
            {/* </Group> */}

            <Table verticalSpacing="xs">
                <Table.Thead bg='var(--mantine-color-gray-1)'>
                    <Table.Tr>
                        {/* <Table.Th></Table.Th> */}
                        <Table.Th><Center>{columnName('ID')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Order_ID')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Product_ID')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Name')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Type')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Quantity')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Price')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Status')}</Center></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
                {filteredProduct.length === 0 && (
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td>
                                <Text>No results found</Text>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                )}
            </Table>
        </Table.ScrollContainer>
    );
}

export default HistoryListTable;
