import { SocialColorType } from ".";

export type FooterSocialMediaProps = {
  $socialColor: SocialColorType;
  $isVisible: boolean;
}

export type FooterParagraphProps = {
  $isVisible: boolean;
  $paragraphColor?: string;
}

export type FooterMenuLinkWrapperProps = {
  $isVisible: boolean;
}