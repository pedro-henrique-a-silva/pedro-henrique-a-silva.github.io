import { useEffect, useRef, useState } from "react"
import CssLogo from "./stacksLogo/CssLogo"
import ExpressLogo from "./stacksLogo/ExpressLogo"
import JavaLogo from "./stacksLogo/JavaLogo"
import JavascriptLogo from "./stacksLogo/JavascriptLogo"
import ReactLogo from "./stacksLogo/ReactLogo"
import SpringLogo from "./stacksLogo/SpringLogo"
import SqlLogo from "./stacksLogo/SqlLogo"
import { SkillsCard, SkillsCardWrapper, SkillsWrapper } from "./ui/SkillsComponents"
import { Title } from "./ui/title"
import { SkillsSectionProps } from "../types/skillsTypes"
import HtmlLogo from "./stacksLogo/HtmlLogo"
import NodeLogo from "./stacksLogo/NodeLogo"

function SkillsSection(props: SkillsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { setSkillDetail } = props;
  
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
    <SkillsWrapper ref={ref}>
      <Title $isVisible={isVisible} $titleSize={1} $titleWeight={200} $titleColor="#FFC25C">
        Habilidades
      </Title>
      <Title $isVisible={isVisible} $titleSize={1.5} $titleWeight={400} $titleColor="#E8E7E7">
        No que sou bom
      </Title>
     

      {isVisible &&
      <>
        <Title $isVisible={isVisible} $titleSize={1} $titleWeight={100} $titleColor="#FFC25C">
        BackEnd
      </Title>
        <SkillsCardWrapper>
          <SkillsCard
          onClick={() => setSkillDetail('node')}
          $isVisible={isVisible} 
          $cardDelay={0}> <NodeLogo /> </SkillsCard>
          <SkillsCard
          onClick={() => setSkillDetail('api')}
          $isVisible={isVisible} 
          $cardDelay={0}> <ExpressLogo /> </SkillsCard>
          <SkillsCard
          onClick={() => setSkillDetail('java')}
          $isVisible={isVisible} 
          $cardDelay={.2}> <JavaLogo /> </SkillsCard>
          <SkillsCard
            onClick={() => setSkillDetail('spring')}
            $isVisible={isVisible} 
            $cardDelay={.4}> <SpringLogo /> </SkillsCard>
          <SkillsCard
            onClick={() => setSkillDetail('sql')}
            $isVisible={isVisible} 
            $cardDelay={.6}> <SqlLogo /> </SkillsCard>
        </SkillsCardWrapper>
      </>
      }
      
      {isVisible && 
      <>
        <Title $isVisible={isVisible} $titleSize={1} $titleWeight={100} $titleColor="#FFC25C">
          FrontEnd
        </Title>
      
        <SkillsCardWrapper>
        <SkillsCard
          onClick={() => setSkillDetail('javascript')}
          $isVisible={isVisible} 
          $cardDelay={0}> <JavascriptLogo /> </SkillsCard>
        <SkillsCard
          onClick={() => setSkillDetail('react')}
          $isVisible={isVisible} 
          $cardDelay={0.2}> <ReactLogo /> </SkillsCard>
        <SkillsCard
          onClick={() => setSkillDetail('css')}
          $isVisible={isVisible} 
          $cardDelay={0.4}> <CssLogo /> </SkillsCard>
        <SkillsCard
          onClick={() => setSkillDetail('react')}
          $isVisible={isVisible} 
          $cardDelay={0.4}> <HtmlLogo /> </SkillsCard>
      </SkillsCardWrapper>
      
      </>
      }
    
    </SkillsWrapper>
  )
}

export default SkillsSection