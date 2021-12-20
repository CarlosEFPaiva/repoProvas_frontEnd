/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import styled from 'styled-components';
import { printOption } from '../OpenedSelectionFunctions';

export default function OpenedBox({ options, setSecondaryFilter, isOpened, setIsOpened }) {
    return (
        <Wrapper isOpened={isOpened}>
            {options.map((option) => printOption(option, setSecondaryFilter, setIsOpened))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 450px;
    max-height: 200px;
    padding: 0px 30px;
    overflow-y: scroll;
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px; 
    background-color: #333333;
    border: 1px solid #2FC4C0;
    cursor: grab;
    & span {
        font-size: 20px;
        margin-top: 16px;
        cursor: pointer;
        text-align: center;
        :hover {
            filter: brightness(0.8);
        }
    }
`;
