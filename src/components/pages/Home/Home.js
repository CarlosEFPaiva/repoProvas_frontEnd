import styled from 'styled-components';
import MainButtons from './components/MainButtons';

import Title from './components/Title';

export default function Homepage() {
    return (
        <Wrapper>
            <Title> RepoProvas </Title>
            <MainButtons />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
