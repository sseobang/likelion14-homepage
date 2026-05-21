import styled from "styled-components";
import Button from "../common/button/button.jsx";

const Container = styled.div`
  width: 100%;
  padding: 80px;
`;

//구성원
const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 24px;
`;

//서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요
const Desc = styled.p`
  font-size: 17px;
  margin-bottom: 60px;
`;

//14기 13기 등등 버튼들
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default function TopSection({ selected, onSelect }) {
  const buttons = ["14기", "13기", "12기", "11기"];

  return (
    <Container>
      <Title>구성원</Title>

      <Desc>
        서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.
      </Desc>

      <ButtonContainer>
        {buttons.map((gen) => (
          <Button
            key={gen}
            text={gen}
            active={selected === gen}
            onClick={() => onSelect(gen)}
          />
        ))}
      </ButtonContainer>
    </Container>
  );
}