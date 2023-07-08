import type {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type WelcomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;
export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
