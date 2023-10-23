import styled from "styled-components";
import {Paragraph} from "./Fonts";
import React from "react";

const Container = styled.div`
    margin-top: 30px;
    height: 15vh;
    background-color: ${(props) => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20%;
    justify-content: center;
    
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
      padding: 40px 5%;
    }
`;

const TextCopyright = styled(Paragraph)`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
`;

const WrapperText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const LinkDiscord = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.colors.blue};;
  }
`;
const Footer = () => {
    return (
        <Container>
            <WrapperText>
                <TextCopyright>
                    © Hedgebot. All rights reserved.
                </TextCopyright>
            </WrapperText>

        </Container>
    );
};

export default Footer;
