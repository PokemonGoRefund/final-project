"use client"

import { Box, Button, Center, Container, Divider, Group, LoadingOverlay, Paper, PasswordInput, SimpleGrid, Stack, Text, Textarea, TextInput, Timeline, Title, } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './page.module.css';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AppPageSectionBox from '@/ui/AppPageSectionBox/AppPageSectionBox';
import Link from 'next/link';
import { IconMail } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
// import useAppStore from "@/src/store/user.store";
function Demo() {
  return (
    <Group justify='flex-start'>
      <Timeline active={0} bulletSize={40} lineWidth={8} color="red" align='left'>
        <Timeline.Item bullet={<IconMail size={24} />} title="กรอกแบบฟอร์มการสมัคร">

        </Timeline.Item>

        <Timeline.Item bullet={<IconMail size={24} />} title="รออนุมัติ">

        </Timeline.Item>

        <Timeline.Item title="ระบบจะส่งผลสมัคร" bullet={<IconMail size={24} />} lineVariant="dashed">

        </Timeline.Item>

      </Timeline>
    </Group>
  );
}

function HorizontalTimeline() {
  return (
    <Box>
      {/* Timeline Items in a Row */}
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <TimelineItem icon={<IconMail size={24} />} title="กรอกแบบฟอร์มการสมัคร" time="" />
        <Divider size="md" style={{ width: '50px' }} />
        <TimelineItem icon={<IconMail size={24} />} title="รออนุมัติ" time="" />
        <Divider size="md" style={{ width: '50px' }} />
        <TimelineItem icon={<IconMail size={24} />} title="ระบบจะส่งผลสมัคร" time="" />
      </Box>
    </Box>
  );
}

// Reusable Timeline Item Component
function TimelineItem({ icon, title, time }: { icon: React.ReactNode; title: string; time: string }) {
  return (
    <Stack align="center" gap={4}>
      <Center style={{ width: 40, height: 40, borderRadius: '50%', background: 'red', color: 'white' }}>
        {icon}
      </Center>
      <Text size="sm" fw={600}>{title}</Text>
      <Text size="xs" c="dimmed">{time}</Text>
    </Stack>
  );
}

function SinginPage() {
  const form = useForm({
    initialValues: {
      name: '',
      lname:'',
      phone: '',
      email: '',
      company: '',
      message: '',
    },
    validate: {
      name: (value: any) => value.trim().length < 2,
      lname: (value: any) => value.trim().length < 2,
      phone:(value: any) => value.trim().length < 2,
      email: (value: any) => !/^\S+@\S+$/.test(value),
      company: (value: any) => value.trim().length === 0,
    },
  });
  return (
    <Container size={800} className={classes.container}>
      {/* <LoadingOverlay visible={checking}
                zIndex={1000}
                bg={'white'}
                overlayProps={{ radius: 'sm', blur: 2 }}>
            </LoadingOverlay> */}
      <AppPageSectionBox p={'xl'} w={'600px'}>
        <Stack gap={'xl'}>
          <Center>
            <Text fz={'24px'} fw={800}>
              3 ขั้นตอนในการสมัครลูกค้าองค์กร ร้านค้า
            </Text>
          </Center>
          {/* <Demo /> */}
          <HorizontalTimeline />
          <Box>
            <form onSubmit={form.onSubmit(() => { })}>
              <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
              >
                Get in touch
              </Title>

              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Last name"
                  placeholder="Your Last name"
                  name="lname"
                  variant="filled"
                  {...form.getInputProps('lname')}
                />
              </SimpleGrid>

              <TextInput
                label="Company"
                placeholder="Company"
                mt="md"
                name="company"
                variant="filled"
                {...form.getInputProps('company')}
              />
              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                  label="Phone"
                  placeholder="Your phone"
                  name='phone'
                  variant="filled"
                  {...form.getInputProps('phone')}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>
              <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
              />

              <Group justify="center" mt="xl">
                <Button type="submit" size="md" bg={"red"}>
                  Send message
                </Button>
              </Group>
            </form>
          </Box>
        </Stack>
      </AppPageSectionBox>
    </Container>
  );
}

export default SinginPage;