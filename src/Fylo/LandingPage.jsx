import styled from "@emotion/styled";
import React from "react";

function LandingPage() {
  return (
    <Container>
      <Header>
        <Logo src="../../public/images/logo.svg" />
        <NavHolder>
          <Nav>Features</Nav>
          <Nav>Terms</Nav>
          <Nav>Sign-In</Nav>
        </NavHolder>
      </Header>
      <Hero>
        <HeroImage src="../../public/images/illustration-intro.png" />
        <HeroText1>
          All your files in one secure location,
          <br />
          accessible anywhere
        </HeroText1>
        <HeroText2>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need share and colaborate with friends
          family, and co-workers.
        </HeroText2>
        <HeroButton>Get Started</HeroButton>
      </Hero>
      <Landing1>
        <One>
          <Two>
            <TwoImg src="../../public/images/icon-access-anywhere.svg" />
            <TwoText1>Access your files, anywhere</TwoText1>
            <TwoText2>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </TwoText2>
          </Two>
          <Two>
            <TwoImg src="../../public/images/icon-security.svg" />
            <TwoText1>Security you can trust</TwoText1>
            <TwoText2>
              2-factor authenticatipon and user-controlled encryption are just a
              couple of the security features we allow to help secure your file.
            </TwoText2>
          </Two>
        </One>
        <One>
          <Two>
            <TwoImg src="../../public/images/icon-collaboration.svg" />
            <TwoText1>Real-time collaboration</TwoText1>
            <TwoText2>
              Securely share files and folders with friends, family and
              collegues for live collaboration. No Email attachments required.
            </TwoText2>
          </Two>
          <Two>
            <TwoImg src="../../public/images/icon-any-file.svg" />
            <TwoText1>Store any type of file</TwoText1>
            <TwoText2>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </TwoText2>
          </Two>
        </One>
      </Landing1>
      <Second>
        <SecondImg src="../../public/images/illustration-stay-productive.PNG" />
        <SecondText>
          <SecondText1>
            Stay productive,
            <br />
            wherever you are.
          </SecondText1>
          <br />
          <SecondText2>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs.
            <br />
            <br />
            Securely share files and folders with friends, family and collegues
            for live collaboration. No Email attachments required.
          </SecondText2>
          <br />
          <SecondText3>See how Fylo works</SecondText3>
        </SecondText>
      </Second>
      <Third>
        <App>
          <AppImg src="../../public/images/bg-quotes.PNG" />
        </App>
        <ThirdHolder>
          <Three>
            <ThreeText>
              Fylo has improved our team productivity, by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </ThreeText>
          </Three>
          <Three>
            <ThreeText>
              Fylo has improved our team productivity, by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </ThreeText>
          </Three>
          <Three>
            <ThreeText>
              Fylo has improved our team productivity, by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </ThreeText>
          </Three>
        </ThirdHolder>
      </Third>
      <Fifth></Fifth>
    </Container>
  );
}

export default LandingPage;
const Fifth = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const ThreeText = styled.div`
  width: 80%;
  height: 40%;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;
const Three = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 6px;
  background-color: #21293c;
  box-shadow: 1px 1px 10px 2px rgba(253, 253, 253, 0.1);
`;
const ThirdHolder = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  felx-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const AppImg = styled.img`
  width: 40px;
  height: 100%;
`;
const App = styled.div`
width: 100%;
height 25px;
`;
const Third = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SecondText3 = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  :hover {
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
`;
const SecondText2 = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
`;
const SecondText1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;
const SecondText = styled.div`
  width: 45%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SecondImg = styled.img`
  width: 50%;
  height: 100%;
`;
const Second = styled.div`
  width: 90%;
  height: 400px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TwoText2 = styled.div`
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
const TwoText1 = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
const TwoImg = styled.img`
  width: 80px;
  height: 70px;
`;
const Two = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const One = styled.div`
  width: 100%;
  height: 42%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Landing1 = styled.div`
  width: 70%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
`;
const HeroText2 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;
const HeroText1 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
`;
const HeroButton = styled.div`
  padding: 15px 55px;
  border-radius: 50px;
  background-color: #53cad6;
  border: none;
  color: white;
  fot-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
  }
`;
const HeroImage = styled.img`
  width: 100%;
`;
const Hero = styled.div`
  width: 40%;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = styled.div`
  color: rgba(255, 255, 255, 0.8);
  transition: all 350ms;
  :hover {
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
`;
const NavHolder = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 100px;
  height: 30px;
`;
const Header = styled.div`
  width: 90%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #1c2230;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
