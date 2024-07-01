export type TitleColorType = '#E8E7E7' | '#FFC25C';
export type SocialColorType = '#0077B5' | '#7232bd';

type Project = {
  id: number,
  projectName: string,
  projectDescription: string,
  projectImage: string,
  projectUrl: string,
  tags: string[]
}

export type TitleProps = {
  $titleColor: TitleColorType;
  $titleSize: number;
  $titleWeight: number;
  $isVisible: boolean;
}

export type AboutSocialMediaProps = {
  $socialColor: SocialColorType;
}

export type ProjectsSectionProps = {
  projects: Project[];
}

export type ProjectCardSocialMediaProps = {
  $socialColor: SocialColorType;
}

export type SkillsCardProps = {
  $cardDelay: number;
  $isVisible: boolean;
}

export type FilterButtonProps = {
  $isActived: boolean;
}

export type ParagraphProps = {
  $paragraphColor?: string;
}

export type FilterMenuProps = {
  setFilter: (filter: string) => void;
  filter: string
}

export type CarouselProps = {
  filter: string;
  projects: Project[];
}

