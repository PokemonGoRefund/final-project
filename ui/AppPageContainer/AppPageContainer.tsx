import {FC} from 'react';
import {Container, ContainerProps} from '@mantine/core';

type AppPageContainerProps = ContainerProps & {
    children: React.ReactNode;
}

const AppPageContainer: FC<AppPageContainerProps> = ({children, ...containerProps}) => {
    return (
        <Container {...containerProps} size={'xl'}>
            {children}
        </Container>
    );
}

export default AppPageContainer;
