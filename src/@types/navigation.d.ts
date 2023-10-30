import { RootAuthStackType } from '../routes/AuthStack';
import { RootMainDrawerType } from '../routes/MainDrawer';
import { RootRecipeStackType } from '../routes/RecipeStack';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootAuthStackType, RootRecipeStackType, RootMainDrawerType {}
  }
}
