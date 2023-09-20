import { RootAuthStackType } from '../routes/AuthStack';
import { RootMainDrawerType } from '../routes/MainDrawer';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootAuthStackType, RootMainDrawerType {}
  }
}
