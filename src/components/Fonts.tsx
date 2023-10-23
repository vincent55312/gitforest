import styled from "styled-components";


export const TitleH1 = styled.h1`
  text-align: center;
  font-family: "Orbitron", serif;
  font-size: 48px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 32px;
  }
`;

export const TitleH2 = styled.h2`
  text-align: center;
  font-family: "Orbitron", serif;
  font-size: 40px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 28px;
  }
`;

export const TitleH3 = styled.h3`
  text-align: center;
  font-family: "Orbitron", serif;
  font-size: 32px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-family: "Roboto", serif;
  font-size: 22px;
  color: ${(props) => props.theme.colors.black};
  margin: 10px;
  padding: 5px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const GreenText = styled.span`
  color: ${(props) => props.theme.colors.green};
  font-weight: 600;
`;

export const RedText = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: 600;
`;

export const BlueText = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-weight: 600;
`;

export const OrangeText = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-weight: 600;
`;


const HedgebotCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.blue};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: 75px;
    height: 75px;  
  }
`;

const HedgebotH = styled(TitleH1)`
  font-size: 70px;
  margin: 0;
  padding: 0;
  font-weight: 1000;
  color: ${(props) => props.theme.colors.blue};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 50px;
  }
`;
