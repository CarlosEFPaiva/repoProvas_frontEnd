import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { HomeIcon } from '../../utils/externalLibs/icons';

export default function GoHomeButton() {
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => navigate('/')}>
            <HomeIcon />
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 50px;
    height: 50px;
    padding: 8px;
    position: fixed;
    top: 20px;
    left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #2FC4C0;
    border-radius: 10px;
    background-color: #333333;
    color: #2FC4C0;
    font-size: 36px;
    cursor: pointer;
    :hover {
        filter: brightness(1.25);
    }
`;
