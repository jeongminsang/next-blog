import { MainContainer, FooterText } from "../styles/components/Footer";

const Footer = () => {
  return (
    <MainContainer>
      <FooterText>
        Copyright © {new Date().getFullYear()} Minsang Jeong
      </FooterText>
    </MainContainer>
  )
}
export default Footer;