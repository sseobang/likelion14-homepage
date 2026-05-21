import styled from "styled-components";
import logoUrl from "../../assets/images/likelion_logo.png"
import { useNavigate } from "react-router-dom";

//멋사로고
const LogoImage = styled.img`
    width: 46px;
    height: 46px;
    
`;


//가장 큰 박스
const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-bottom: 1px #1A1A1A solid;
    justify-content: space-between;
    align-items: flex-start;
    display: inline-flex;
`;

// 로고+멋쟁이사자처럼 박스1
const StyledFrame1707482404 = styled.div`
    flex: 1 1 0;
    height: 76px;
    max-width: 340px;
    min-width: 324px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 20px;
    border-right: 1px #1A1A1A solid;

    justify-content: center;
    align-items: center;
    gap: 16px;
    display: flex;
`;


//로고+멋쟁이사자처럼 박스2 -- 이 박스는 왜 있어야 하는 걸까...
const StyledFrame1707482513 = styled.div`
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    gap: 16px;
    display: flex;
`;

//멋쟁이사자처럼 스타일
const StyledSpan = styled.span`
    color: #1A1A1A;
    font-size: 17px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
`;

//지원하기+프로젝트+구성원 스타일
const StyledSpan2 = styled.span`
    color: #1A1A1A;
    font-size: 17px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word;
`;

//로그인/회원가입 스타일
const StyledSpan3 = styled.span`
    color: #1A1A1A;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    word-wrap: break-word;
`;

//멋쟁이사자처럼 스타일
const StyledP = styled.p`
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

//지원하기+프로젝트+구성원+로그인/회원가입 박스
const StyledFrame1707482511 = styled.div`
    flex: 1 1 0;
    height: 76px;
    max-width: 510px;
    min-width: 440px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

//지원하기+프로젝트+구성원 박스1
const StyledFrame1707482405 = styled.div`
    flex: 1 1 0;
    height: 76px;
    min-width: 334px;
    padding-top: 28px;
    padding-bottom: 28px;
    border-left: 1px #1A1A1A solid;
    justify-content: center;
    align-items: center;
    gap: 35px;
    display: flex;
`;

//지원하기+프로젝트+구성원 박스2 -- 이 박스는 왜 있어야 하지..?
const StyledFrame1707482520 = styled.div`
    flex: 1 1 0;
    max-width: 288px;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

//로그인/회원가입 박스
const StyledFrame134 = styled.div`
    flex: 1 1 0;
    height: 76px;
    max-width: 200px;
    min-width: 100px;
    padding-top: 28px;
    padding-bottom: 28px;
    border-left: 1px #1A1A1A solid;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-left: 33px;
`;

//클릭 가능한 각 버튼 스타일
const StyledButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`;




export default function Header(){

    const navigate = useNavigate();

    return(
        <div>
            <StyledDiv>
                <StyledFrame1707482404>
                    <StyledFrame1707482513>
                        <LogoImage src={logoUrl}/>
                        <StyledP>
                            <StyledSpan>멋쟁이사자처럼 서경대학교</StyledSpan>
                        </StyledP>
                    </StyledFrame1707482513>
                </StyledFrame1707482404>

                <StyledFrame1707482511>
                    <StyledFrame1707482405>
                        <StyledButton onClick={() => navigate("/recruit")}>
                            <StyledP><StyledSpan2>지원하기</StyledSpan2></StyledP>
                        </StyledButton>

                        <StyledButton onClick={() => navigate("/project")}>
                            <StyledP><StyledSpan2>프로젝트</StyledSpan2></StyledP>
                        </StyledButton>

                        <StyledButton onClick={() => navigate("/minimembers")}>
                            <StyledP><StyledSpan2>구성원</StyledSpan2></StyledP>
                        </StyledButton>
                    </StyledFrame1707482405>

                    <StyledFrame134>
                        <StyledButton onClick={() => navigate("/login")}>
                            <StyledP><StyledSpan3>로그인/회원가입</StyledSpan3></StyledP>
                        </StyledButton>
                    </StyledFrame134>
                </StyledFrame1707482511>
            </StyledDiv>
        </div>
    );
}