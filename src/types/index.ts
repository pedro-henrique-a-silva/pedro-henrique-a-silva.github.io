import skillsData from "../data/skillsData";

export type SocialColorType = '#0077B5' | '#7232bd';
export type TitleColorType = '#E8E7E7' | '#FFC25C';
export type skillDetailType = keyof typeof skillsData | ''

export type Project = {
  id: number,
  projectName: string,
  projectDescription: string,
  projectImage: string,
  projectUrl: string,
  repoUrl: string,
  tags: string[]
}