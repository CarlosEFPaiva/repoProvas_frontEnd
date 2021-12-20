/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useContext } from 'react';
import styled from 'styled-components';

import NewTestContext from '../../../../../../contexts/NewTestContext';

import { selectOption } from '../OpenedSelectionFunctions';

export default function OpenedBox({ options, atribute, isOpened, setIsOpened }) {
    const { adjustTestSingleAtribute } = useContext(NewTestContext);
    return (
        <Wrapper isOpened={isOpened}>
            {options.map((option) => (
                <span
                    key={`selection ${atribute} ${option}`}
                    onClick={
                        (e) => selectOption(
                            e,
                            adjustTestSingleAtribute,
                            atribute,
                            option,
                            setIsOpened,
                        )
                    }
                >
                    {option}
                </span>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 150px;
    max-height: 200px;
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
