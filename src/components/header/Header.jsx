import styled from "styled-components";
import logoUrl from "../../assets/images/likelion_logo.png"

const LogoImage = styled.img`
    width: 46px;
    height: 46px;
`;


export default function Header(){

    return(
        <div>
            <LogoImage src={logoUrl}/>

        </div>
    );
}