import styled from 'styled-components';

export default function InitialButton({ text, isSelected, onClick }) {
    return (
        <Wrapper disabled={isSelected} isSelected={isSelected} onClick={onClick}>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 250px;
    height: 50px;
    padding: 20px;
    border: 1px solid #2FC4C0;
    border-radius: 5px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2FC4C0;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    filter: ${({ isSelected }) => (isSelected ? 'brightness(1.25)' : 'none')};
    :hover {
        filter: brightness(1.25);
    }
`;
