export interface IHeaderMenuItem {
  title: string;
  linkTo: string;
}

export interface IStoreState {
  name: string;
  role: string;
  picture: string;
  text: string;
  experienceList: IExperience[];
}

export interface IExperience {
  title: string;
  icon: string;
  description: string;
}
