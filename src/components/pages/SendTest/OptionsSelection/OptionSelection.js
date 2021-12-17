import styled from 'styled-components';

import OptionsBox from './OptionsBox/OptionsBox';

export default function OptionsSelection({ title, atribute, options }) {
    if (!options.length) {
        return ('');
    }
    return (
        <Wrapper>
            <span>
                {title}
            </span>
            <OptionsBox
                atribute={atribute}
                options={options}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & > span {
        font-size: 24px;
        font-weight:700;
    }
`;
