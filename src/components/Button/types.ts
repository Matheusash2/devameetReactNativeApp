import { ImageSourcePropType } from "react-native";

export interface IButton {
  placeholder: string | '';
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  loading?: boolean;
  icon?: ImageSourcePropType;
}
