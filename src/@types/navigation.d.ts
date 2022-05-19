import { HighlightRoomProps } from './../components/HighlightRoom/index';
// import { HighlightRoomProps } from ".";
export type DashboardNavigationProps = {
  id: string;
};

export type RegisterClassNavigationPros = {
  id: string;
  name: string;
};
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      dashboard: DashboardNavigationProps;
      registerclass: RegisterClassNavigationProps;
    }
  }
}
