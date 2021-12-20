import styled from 'styled-components';

export default function Test({ name, category, thirdInfo, link }) {
    return (
        <Wrapper onClick={() => window.open(link)}>
            <Title>
                {`${name} - ${category}`}
            </Title>
            <ThirdInfo>
                {thirdInfo}
            </ThirdInfo>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 200px;
    height: 250px;
    padding: 25px;
    margin-right: 50px;
    margin-bottom: 50px;
    border: 1px solid #2FC4C0;
    border-radius: 20px;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2FC4C0;
    cursor: pointer;
    :hover {
        filter: brightness(1.25);
    }
`;

const Title = styled.span`
    font-size: 24px;
    margin-bottom: 40px;
`;

const ThirdInfo = styled.span`
    font-size: 24px;
`;
