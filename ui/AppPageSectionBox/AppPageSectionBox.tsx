import {Box, BoxProps} from '@mantine/core';
import classes from './AppPageSectionBox.module.css';

type AppBoxProps = BoxProps & { children: React.ReactNode };

export default function AppPageSectionBox({children, ...props}: AppBoxProps) {
    return (
        <Box className={classes.AppBox} {...props}>
            {children}
        </Box>
    );
}
