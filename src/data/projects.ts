export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [

  {
    title: "NLW - Esports",
    techs: ["ReactJS", "TypeScript", "Tailwindcss", "react-query"],
    link: "https://github.com/afpp3/nlw-esports-web",
  },

  {
    title: "Dogs",
    techs: ["ReactJS"],
    link: "https://github.com/afpp3/dogs",
  },
];

export default projects;
