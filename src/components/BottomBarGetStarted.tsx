import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {TitleH2} from "./Fonts";

const TextGetStarted = styled(TitleH2)`
    font-size: 24px;
    font-family: Orbitron, serif;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
`;

const Container = styled.div`
    position: fixed;
    z-index: 3;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.colors.white};;
    cursor: pointer;
  
    :hover {
      background-color: ${(props) => props.theme.colors.blue};
      ${TextGetStarted} {
        color: ${(props) => props.theme.colors.black};
      }
    }
`;

const BottomBarGetStarted = () => {
    const navigate = useNavigate();

    return <Container onClick={() => {navigate("/app")}}>
        <TextGetStarted>Launch app</TextGetStarted>
    </Container>;
};

export default BottomBarGetStarted;
