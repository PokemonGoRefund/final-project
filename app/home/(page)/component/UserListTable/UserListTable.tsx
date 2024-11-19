'use client';

import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
    Center, Checkbox, CloseButton,
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
import { dataUser } from '@/app/data/admin/user/User';
// import {getPatientCaseList, updatePatientCaseStudy} from "@/src/app/db";
// import useAppStore from "@/src/store/user.store";

const UserListTable: FC = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>(['']);
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);
    const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    const [searchCompany, setSearchCompany] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const [searchPhone, setSearchPhone] = useState<string>('');
    const [searchEmail, setSearchEmail] = useState<string>('');
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

    const filteredProduct = dataUser.filter((p) => {
        return (
            (!searchCompany || p.company_name.toLowerCase().includes(searchCompany.toLowerCase())) &&
            (!searchName || p.name.toLowerCase().includes(searchName.toLowerCase())) &&
            (!searchPhone || p.phone.toLowerCase().includes(searchPhone.toLowerCase())) &&
            (!searchEmail || p.email.toLowerCase().includes(searchEmail.toLowerCase()))
        );
    });

    // กรองค่าที่ซ้ำออกจาก data ที่จะส่งให้ Autocomplete
    const uniqueCompany = Array.from(new Set(filteredProduct.map(product => product.company_name)));
    const uniqueName = Array.from(new Set(filteredProduct.map(product => product.name)));
    const uniquePhone = Array.from(new Set(filteredProduct.map(product => product.phone)));
    const uniquesEmail = Array.from(new Set(filteredProduct.map(product => product.email)));

    const autocompleteData = [
        { value: searchCompany, setValue: setSearchCompany, data: uniqueCompany, placeholder: "Search Company" },
        { value: searchName, setValue: setSearchName, data: uniqueName, placeholder: "Search Name" },
        { value: searchPhone, setValue: setSearchPhone, data: uniquePhone, placeholder: "Search Phone" },
        { value: searchEmail, setValue: setSearchEmail, data: uniquesEmail, placeholder: "Search Email" },
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
                    disabled={searchCompany === ''}
                >
                    <Text>Add User</Text>
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
            <Table.Tr key={row.company_name}
                className={classes.hover_row}
            >
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{index + 1}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{row.company_name}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'center'}>{row.name}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.phone}</Text>
                    </Center>
                </Table.Td>
                <Table.Td>
                    <Center>
                        <Text size={'sm'} c='var(--mantine-color-gray-8)' ta={'start'}>{row.email}</Text>
                    </Center>
                </Table.Td>
            </Table.Tr >
        );
    });

    return (
        <Table.ScrollContainer minWidth={800}>
            <Group grow mb={'lg'}>
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
            <Group justify='flex-end' mb={'lg'}>
                <Button>
                    <Text>Add User</Text>
                </Button>
            </Group>
            <Table verticalSpacing="xs">
                <Table.Thead bg='var(--mantine-color-gray-1)'>
                    <Table.Tr>
                        <Table.Th><Center>{columnName('ID')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Company')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Name')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Phone')}</Center></Table.Th>
                        <Table.Th><Center>{columnName('Email')}</Center></Table.Th>
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

export default UserListTable;
