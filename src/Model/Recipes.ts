export type RecipesType = {
  img: string;
  title: string;
  duration: number;
  video: string;
  ingredients: {
    dough: string[];
    filling: string[];
    icings: string[];
  };
  preparation: {
    dough: string[];
    filling: string[];
    icings: string[];
    make: string[];
  };
};
