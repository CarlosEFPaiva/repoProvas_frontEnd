import { useState } from 'react';
import styled from 'styled-components';

import BlankSpace from '../../../../../shared/BlankSpace';
import { ArrowDown } from '../../../../../../utils/externalLibs/icons';
import OpenedBox from './OpenedOptionsBox';

export default function OptionsBox({ title, options, setSecondaryFilter }) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <Wrapper showBorder={!isOpened} onClick={() => setIsOpened(true)}>
                <span>
                    {title}
                    <ArrowDown />
                </span>
                <OpenedBox
                    isOpened={isOpened}
                    setSecondaryFilter={setSecondaryFilter}
                    options={options}
                    setIsOpened={setIsOpened}
                />
            </Wrapper>
            <BlankSpace
                isShown={isOpened}
                isTransparent
                onClick={() => setIsOpened(false)}
            />
        </>
    );
}

const Wrapper = styled.div`
    width: 150px;
    height: 50px;
    border: ${({ showBorder }) => (showBorder ? '1px solid #2FC4C0' : 'none')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    & > span {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        padding-right: 20px;
        font-size: 16px;
        text-align: center;
        & svg {
            position: absolute;
            right: 0px;
            top: calc(50% - 8px);
        }
    }
`;
