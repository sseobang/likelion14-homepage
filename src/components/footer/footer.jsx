import styled from "styled-components";

import skuFooter from "../../assets/images/sku_footer.png";
import skon from "../../assets/images/skon.png";

//SKU LIKELION+스콘이 컨테이너 박스
const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//SKU LIKELION 컨테이너 박스
const FooterContainer2 = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left : 25px;
`;

//스콘이 컨테이너 박스
const FooterContainer3 = styled.footer`
  display: flex;
  align-items: center;
  padding-right : 25px;

`;

//SKU LIKELION 크기
const FooterImage = styled.img`
  height: 43px;
`;

//스콘이 크기
const FooterImage2 = styled.img`
  height: 50px;
`;

export default function Footer() {
  return (
    <FooterContainer>
        <FooterContainer2>
            <FooterImage src={skuFooter} />
        </FooterContainer2>

        <FooterContainer3>
            <FooterImage2 src={skon} />
        </FooterContainer3>
        
    </FooterContainer>
  );
}