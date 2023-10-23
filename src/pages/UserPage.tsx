import styled from "styled-components";
import BottomBarGetStarted from "../components/BottomBarGetStarted";
import {BlueText, GreenText, Paragraph, RedText, TitleH2, TitleH3} from "../components/Fonts";
import Footer from "../components/Footer";

const Container = styled.div`
  margin-bottom: 60px;
`;

const ScreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  height: calc(100vh - 60px);
  overflow: hidden;
`;

const MainTitle = styled.h1`
  margin-top: 20vh;
  text-align: center;
  font-family: "Orbitron", serif;
  font-size: 92px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  padding-top: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 58px;
  }
`;

const WhyTitle = styled(TitleH2)`
  color: ${(props) => props.theme.colors.white};
  margin: 20px 0 0;
`;

const PastResultsTitle = styled(TitleH2)`
  color: ${(props) => props.theme.colors.black};
  margin: 0 0 30px;
`;

export const AnimatedBlueText = styled(BlueText)`
  color: ${(props) => props.theme.colors.blue};
`;

const SecondTitle = styled.h2`
  text-align: center;
  font-family: "Orbitron", serif;
  font-size: 48px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 24px;
  }
`;

const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 40px 15%;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding: 20px 5%;
  }
`;

const BlackBlock = styled(WhiteBlock)`
  background-color: ${(props) => props.theme.colors.black};
`;

const SeparatorWhite = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SeparatorBlack = styled(SeparatorWhite)`
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;

const TitleParagraphWhite = styled(TitleH3)`
  margin-top: 0;
  font-size: 28px;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 22px;
  }
`;

const ParagraphWhite = styled(Paragraph)`
  color: ${(props) => props.theme.colors.white};
`;

const UserPage = () => {
    return (
        <Container>
            <ScreenBlock>
                <MainTitle><BlueText>Git</BlueText>Forest</MainTitle>
                <SecondTitle>A <BlueText>green</BlueText> alternative to GitHub</SecondTitle>
            </ScreenBlock>
            <BlackBlock>
                <WhyTitle>Why GitForest ?</WhyTitle>
                <SeparatorWhite/>
                <TitleParagraphWhite>Contribute to a <BlueText>sustainable</BlueText> future</TitleParagraphWhite>
                <ParagraphWhite>Every time you create a new branch, we plant a tree.</ParagraphWhite>
                <ParagraphWhite>GitForest is not just about code, it's about making a difference. We believe in a future where tech and nature coexist.</ParagraphWhite>
                <SeparatorWhite/>
                <TitleParagraphWhite>Easy to <BlueText>use</BlueText></TitleParagraphWhite>
                <ParagraphWhite>GitForest works just like your favorite Git platforms. You won't have to change your workflow.</ParagraphWhite>
                <SeparatorWhite/>
                <TitleParagraphWhite>Open Source and <BlueText>Community Driven</BlueText></TitleParagraphWhite>
                <ParagraphWhite>GitForest is built by developers, for developers. We believe in the power of open source and community.</ParagraphWhite>
            </BlackBlock>
            <WhiteBlock>
                <PastResultsTitle>Our Impact</PastResultsTitle>
                <Paragraph>Since our launch, our users have helped us plant over <BlueText>10,000 trees</BlueText>! But we're not stopping there. Our goal is to plant a forest.</Paragraph>
                <SeparatorBlack/>
                <Paragraph>Join us in our mission to make the tech industry a little greener. Every branch counts.</Paragraph>
            </WhiteBlock>
            <BottomBarGetStarted/>
            <Footer/>
        </Container>
    )
};

export default UserPage;