export type ProfileLinks = {
  email: string;
  github: string;
  linkedin: string;
  freelancer: string;
};

const fallbackProfileLinks: ProfileLinks = {
  email: "sebascamargo39@gmail.com",
  github: "https://github.com/dhait0",
  linkedin: "https://www.linkedin.com/in/sebastian-camargo-a823b6322/",
  freelancer: "https://www.freelancer.com.co/u/Cptkeys?frm=Cptkeys&sb=t",
};

export function getProfileLinks(): ProfileLinks {
  return {
    email: process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? fallbackProfileLinks.email,
    github: process.env.NEXT_PUBLIC_PROFILE_GITHUB_URL ?? fallbackProfileLinks.github,
    linkedin: process.env.NEXT_PUBLIC_PROFILE_LINKEDIN_URL ?? fallbackProfileLinks.linkedin,
    freelancer: process.env.NEXT_PUBLIC_PROFILE_FREELANCER_URL ?? fallbackProfileLinks.freelancer,
  };
}

export function mailTo(address: string) {
  return `mailto:${address}`;
}
