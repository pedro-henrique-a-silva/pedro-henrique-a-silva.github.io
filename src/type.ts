export type TitleColorType = '#E8E7E7' | '#FFC25C';
export type SocialColorType = '#0077B5' | '#7232bd';

export type TitleProps = {
  titleColor: TitleColorType;
  titleSize: number;
  titleWeight: number;
  isVisible: boolean;
}

export type AboutSocialMediaProps = {
  socialColor: SocialColorType;
}

export type SkillsCardProps = {
  cardDelay: number;
  isVisible: boolean;
}

type SummariedSkill = {
  title: string;
  summarie: string;
}

type Skill = {
  skillName: string;
  skillPercent: number;
}

export type SkillsSectionData = {
  summariesSkills: SummariedSkill[];
  skills: Skill[];
}