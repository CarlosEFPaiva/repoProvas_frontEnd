import styled from 'styled-components';
import BoldText from '../../../../shared/BoldText';
import Test from './Test';

export default function Tests({ tests }) {
    if (!tests.length) {
        return '';
    }

    return (
        <Wrapper>
            <BoldText fontSize="32px">
                Selecione sua prova:
            </BoldText>
            <div>
                {tests.map(({ year, semester, category, link, thirdInfo }) => (
                    <Test
                        key={`Test ${year}.${semester} - ${category} -- ${thirdInfo}`}
                        name={`${year}.${semester}`}
                        category={category}
                        thirdInfo={thirdInfo}
                        link={link}
                    />
                ))}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90%;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        margin: 30px 0px;
        display: flex;
        flex-wrap: wrap;
    }
`;
