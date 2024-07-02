import { skillDetailType } from ".";

export type SkillsCardProps = {
  $cardDelay: number;
  $isVisible: boolean;
}

export type SkillsSectionProps = {
  skillDetail: string;
  setSkillDetail: (skill: skillDetailType) => void;
}