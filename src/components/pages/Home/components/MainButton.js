import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function MainButton({ text, path }) {
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => navigate(path)}>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 300px;
    height: 300px;
    padding: 20px;
    border: 1px solid #2FC4C0;
    border-radius: 50px;
    background-color: #333333;
    color: #2FC4C0;
    font-size: 36px;
    font-weight: 700;
    cursor: pointer;
    :hover {
        filter: brightness(1.25);
    }
`;
