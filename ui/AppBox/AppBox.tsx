import {Box, BoxProps} from '@mantine/core';
import classes from './AppBox.module.css';

type AppBoxProps = BoxProps & { children: React.ReactNode };

export default function AppBox({children, ...props}: AppBoxProps) {
    return (
        <Box className={classes.AppBox} {...props}>
            {children}
        </Box>
    );
}
