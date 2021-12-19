import styled from 'styled-components';

import OptionsBox from './OptionsBox/OptionsBox';

export default function OptionsSelection({
    selectedMainFilter,
    options,
    secondaryFilter,
    setSecondaryFilter,
}) {
    if (!options.length) {
        return ('');
    }
    return (
        <Wrapper>
            <span>
                {
                    selectedMainFilter === 1 ?
                        'Selecione o professor: ' :
                        'Selecione a disciplina: '
                }
            </span>
            <OptionsBox
                options={options}
                title={secondaryFilter.name?.split(' - ')[0]}
                setSecondaryFilter={setSecondaryFilter}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px 0px;
    & > span {
        font-size: 24px;
        font-weight:700;
    }
`;
