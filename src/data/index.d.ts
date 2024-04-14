// import { RouteComponentProps } from "react-router-dom";

export interface contentHomeSection {
  heading: string;
  image: string;
  reverse: boolean;
  description: string;
  action: any;
}

export interface Adventure {
  name: string;
  image: string;
}

export interface Carousel {
  heading: string;
  description: string;
  image: string;
}

export type carousel = {
  heading: string;
  rank: number;
  images: {
    link: string;
    rank: number;
    title: string;
    imageSource: string;
    description: string;
  }[];
};

export type navLink = {
  title: string;
  link: string;
};

// export interface routerProps extends RouteComponentProps {}

export type selectOptions = {
  option: string;
};

export type checkBoxOptions = {
  htmlName: string;
  name: string;
};

export type accordionQn = {
  qn: string;
  ans?: string;
  category: "kili" | "safari";
  list?: string[];
  note?: string;
};

export type termsAndConditionSection = {
  name: string;
  link: string;
};

export type itenaryProperties = {
  id: string;
  img: string;
  data: {
    name: string;
    link: string;
    img: string;
  }[];
};

export type specialOffersProperties = {
  mainHeading: string;
  subHeading: string;
  img: string;
  link: string;
  offer?: string;
};
