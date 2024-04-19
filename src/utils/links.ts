import { SiCalendly, SiGithub, SiLinkedin } from "react-icons/si";

import { CgWebsite } from "react-icons/cg";
import { GrDocument } from "react-icons/gr";
import { IconType } from "react-icons";

export interface Link {
  title: string;
  url: string;
  Icon: IconType;
}

export const links: Link[] = [
  { title: 'GitHub', url: 'https://github.com/YoseptF', Icon: SiGithub },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/joseph-flores-vega/', Icon: SiLinkedin },
  { title: 'Resume', url: 'https://cv.yosept.me', Icon: GrDocument },
  { title: 'calendly', url: 'https://calendly.yosept.me', Icon: SiCalendly},
  { title: 'Personal Website', url: 'https://yosept.me', Icon: CgWebsite },
]