export type ContextTheme = {
  theme: 'dark' | 'light';
  updateTheme: (theme: 'dark' | 'light') => void;
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