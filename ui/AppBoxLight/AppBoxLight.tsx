import {Box, BoxProps} from '@mantine/core';
import classes from './AppBoxLight.module.css';

type AppBoxLightProps = BoxProps & { children: React.ReactNode };

export default function AppBoxLight({children, ...props}: AppBoxLightProps) {
    return (
        <Box className={classes.AppBoxLight} {...props}>
            {children}
        </Box>
    );
}
