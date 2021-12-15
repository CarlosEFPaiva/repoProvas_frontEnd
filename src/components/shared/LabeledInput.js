import styled from 'styled-components';
import { Input } from './Input';

export default function LabeledInput({ title, isShown, value, onChange }) {
    return (
        <Wrapper isShown={isShown}>
            <span>{title}</span>
            <Input
                value={value}
                onChange={onChange}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 500px;
    display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px 30px; 
    & span {
        font-size: 24px;
        font-weight:700;
        margin-bottom: 16px;
    }
`;
