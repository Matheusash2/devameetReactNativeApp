import {ImageSourcePropType} from 'react-native';

export interface IInput {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  segureTextEntry?: boolean;
  style?: any;
  icon?: ImageSourcePropType;
}
