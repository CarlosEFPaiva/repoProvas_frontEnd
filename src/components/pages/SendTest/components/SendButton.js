import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Loading } from '../../../../utils/externalLibs/reactLoader';
import { isAnyAtributeEmpty, sendTestData } from '../SendTestFunctions';

export default function SendButton({ text, isLoading, setIsLoading, isShown, newTestData }) {
    const navigate = useNavigate();
    return (
        <Wrapper
            isShown={isShown}
            onClick={() => sendTestData(newTestData, setIsLoading, navigate)}
            isForbidden={isAnyAtributeEmpty(newTestData)}
            disabled={isAnyAtributeEmpty(newTestData)}
        >
            {isLoading ?
                (
                    <Loading
                        type="ThreeDots"
                        color="#2FC4C0"
                        height="60px"
                        width="60px"
                    />
                ) :
                text}
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
