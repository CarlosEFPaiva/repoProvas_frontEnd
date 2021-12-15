import styled from 'styled-components';
import { isAnyAtributeEmpty } from '../SendTestFunctions';

export default function SendButton({ text, isShown, objectToSend }) {
    return (
        <Wrapper
            isShown={isShown}
            onClick={() => console.log('TBD')}
            isForbidden={isAnyAtributeEmpty(objectToSend)}
            disabled={isAnyAtributeEmpty(objectToSend)}
        >
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 100px;
    height: 60px;
    padding: 20px;
    display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    border: 1px solid #2FC4C0;
    border-radius: 5px;
    background-color: #333333;
    color: #2FC4C0;
    font-size: 24px;
    font-weight: 700;
    cursor: ${({ isForbidden }) => (isForbidden ? 'not-allowed' : 'pointer')};
    :hover {
        filter: ${({ isForbidden }) => (isForbidden ? 'none' : 'brightness(1.25)')};
    }
`;
