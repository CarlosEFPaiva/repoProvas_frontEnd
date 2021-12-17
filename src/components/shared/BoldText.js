import styled from 'styled-components';

export default function BoldText({ children, fontSize }) {
    return (
        <Wrapper fontSize={fontSize}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.span`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 700;
`;
