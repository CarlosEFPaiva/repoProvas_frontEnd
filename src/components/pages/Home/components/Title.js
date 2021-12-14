import styled from 'styled-components';

export default function Title({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.span`
    font-size: 60px;
    font-weight: 700;
`;
