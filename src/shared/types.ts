export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    Projects = "projects",
    ContactUs = "contactus",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }