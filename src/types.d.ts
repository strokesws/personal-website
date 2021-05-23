export interface IHeaderMenuItem {
  title: string;
  linkTo: string;
}

export interface IAboutMe {
  name: string;
  role: string;
  picture: string;
  text: string;
}

export interface IExperience {
  title: string;
  icon: string;
  description: string;
}

export interface State extends IAboutMe {
  experienceList: IExperience[];
}
