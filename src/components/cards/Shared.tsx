import styled from "styled-components";
import {TitleH3} from "../Fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ContainerCards = styled.div`
  margin-top: 20px;
  height: 35vh;
  display: flex;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    height: 400px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;  
  height: 100%;
  border-radius: ${(props) => props.theme.radius.extended};
  padding-bottom: 20px;
`;

export const ContentCard = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  margin: auto;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: 90%;
  }
`;

export const TextWhite = styled(TitleH3)`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-family: "Roboto", serif;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const TitleDate = styled(TitleH3)`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  font-family: "Roboto", serif;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const SeparatorWhite = styled.div`
  width: 100%;
  margin: auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const ContainerLine = styled.div`
  display: flex;
  justify-content: space-between;
`;