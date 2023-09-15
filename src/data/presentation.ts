type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "afelipp3@gmail.com",
  title: "Olá, sou o André Felippe 👋",
  description:
    "Sou um *desenvolvedor frontend* há cerca de 2 anos, trabalho atualmente com *React, Javascript, Typescript, Next, Tailwindcss*, é um prazer ter você aqui",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/andre-felippe",
    },

    {
      label: "Github",
      link: "https://github.com/afpp3",
    },
  ],
};

export default presentation;
