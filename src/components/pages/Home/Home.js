import styled from 'styled-components';
import MainButtons from './components/MainButtons';

import BoldText from '../../shared/BoldText';

export default function Homepage() {
    return (
        <Wrapper>
            <BoldText fontSize="60px"> RepoProvas </BoldText>
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
