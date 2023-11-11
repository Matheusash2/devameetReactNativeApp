import {ReactElement} from 'react';

export interface IHeaderFooter {
  currentTab: string;
  submit?: () => void;
}
export interface IContainer extends IHeaderFooter {
  children: ReactElement<any, any>;
}
