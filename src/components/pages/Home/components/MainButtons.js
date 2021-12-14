import styled from 'styled-components';
import MainButton from './MainButton';

export default function MainButtons() {
    return (
        <Wrapper>
            <MainButton
                text="Enviar Prova"
                path="/send-test"
            />
            <MainButton
                text="Visualizar Prova"
                path="/view-test"
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 60%;
    margin-top: 70px;
    display: flex;
    justify-content: space-around;
`;
