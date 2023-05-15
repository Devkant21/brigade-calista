export enum SelectedPage {
  Home = "home",
  Abouts = "abouts",
  OurPlans = "ourplans",
  ContactUs = "contactus",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface PlanType {
  name: string;
  description?: string;
  image: string;
}
