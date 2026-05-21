import styled from "styled-components";
import profileImage from "../../assets/images/profile.png";

//각 카드
const Card = styled.div`
  width: 240px;
  border: 1px solid #1A1A1A;
  background: #FAFBF8;
`;

//이미지 박스
const ImageBox = styled.div`
  height: 240px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//정보
const Info = styled.div`
  padding: 14px;
  background: #F8FBE7;
`;

const Name = styled.h3`
  font-size: 16px;
`;

const Major = styled.p`
  font-size: 12px;
`;


export default function InfoBox({ name, major, position }) {
  const [department, grade] = major.split(" ");

  return (
    <Card>
      <ImageBox>
        <ProfileImage src={profileImage} alt={`${name} 프로필`} />
      </ImageBox>

      <Info>
        <Name>{name}</Name>
        <Major>
          {department}
          <br />
          {grade}
        </Major>
        {position && <Major>{position}</Major>}
      </Info>
    </Card>
  );
}