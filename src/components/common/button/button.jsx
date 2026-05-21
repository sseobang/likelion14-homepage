import styled from "styled-components";

const StyledButton = styled.button`
  width: 90px;
  height: 43px;

  border: 1px solid #1A1A1A;
  background: ${(props) => (props.$active ? "#C6E400" : "white")};

  font-size: 17px;
  font-weight: 500;

  cursor: pointer;
`;

export default function Button({ text, active, onClick }) {
  return (
    <StyledButton $active={active} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

