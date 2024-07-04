import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { 
  FooterMenuLink, 
  FooterMenuLinkWrapper, 
  FooterParagraph, 
  FooterSocialMedia, 
  FooterSocialMediaWrapper, 
  FooterWrapper } from "./ui/footerComponents"
import { useEffect, useRef, useState } from "react";

function FooterSection() {
  const [isVisible, setIsVisible] = useState(false); 
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );
      
      observer.observe(ref.current);
    }
  }, []);

  return (
    <FooterWrapper ref={ref}>
      <FooterParagraph $isVisible={isVisible} $paragraphColor="#E8E7E7">
        CONTATO: pedro.henrique.a.s66@gmail.com
      </FooterParagraph>

      <FooterSocialMediaWrapper >
        <FooterSocialMedia href="https://www.linkedin.com/in/pedro-henrique-a-silva/" target="_blank" $isVisible={isVisible}  $socialColor="#0077B5">
          <LinkedinLogo size={24}/>
        </FooterSocialMedia>
        <FooterSocialMedia href="https://github.com/pedro-henrique-a-silva" target="_blank" $isVisible={isVisible} $socialColor="#7232bd">
          <GithubLogo size={24}/>
        </FooterSocialMedia>
      </FooterSocialMediaWrapper>
      <FooterMenuLinkWrapper $isVisible={isVisible}>
        <FooterMenuLink href='#home'>Home</FooterMenuLink>
        <FooterMenuLink href='#about'>Sobre mim</FooterMenuLink>
        <FooterMenuLink href='#projects'>Portifolio</FooterMenuLink>
      </FooterMenuLinkWrapper>
    </FooterWrapper>
  )
}

export default FooterSection