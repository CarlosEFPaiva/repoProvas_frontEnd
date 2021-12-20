import styled from 'styled-components';
import InitialButton from './InitialButton';

export default function InitialButtons(
    { mainFilters, selectedMainFilter, setSelectedMainFilter },
) {
    return (
        <Wrapper>
            {mainFilters.map(({ key, id, text }) => (
                <InitialButton
                    key={key}
                    text={text}
                    isSelected={selectedMainFilter === id}
                    onClick={() => setSelectedMainFilter(id)}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 40%;
    margin-top: 70px;
    display: flex;
    justify-content: space-around;
`;
