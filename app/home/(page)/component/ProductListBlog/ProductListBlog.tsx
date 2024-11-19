import { IconBookmark, IconCreditCardPay, IconHeart, IconShare, IconShoppingCart } from '@tabler/icons-react';
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
} from '@mantine/core';
import classes from './ProductListBlog.module.css';

export function ProductListBlog() {
    const linkProps = { href: '/', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <a {...linkProps}>
                    <Image src="/SN-503.jpg" height={180} width={180} />
                </a>
            </Card.Section>

            {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge> */}

            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                MS-503 MS Polymer Adhesive / Sealant
            </Text>

            <Text fz="sm" c="dimmed" lineClamp={4}>
            MS-503 is based upon Hybrid Silyl Modified Polyether Technology. 
            It is suitable in wide range of industrial applications and it has excellent 
            primerless adhesion to various types of substrates of dissimilar porosity, and 
            surface textures.
            </Text>

            <Group justify='flex-end' className={classes.footer}>
                <Group gap={8} mr={0}>
                    <ActionIcon className={classes.action}>
                        <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconShoppingCart
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.yellow[7]}
                        />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconCreditCardPay style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
                    </ActionIcon>
                </Group>
            </Group>
        </Card>
    );
}