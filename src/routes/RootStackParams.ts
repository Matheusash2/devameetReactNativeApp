import { IMeet } from "../models/Meet";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Meet: {meet: IMeet } | undefined;
    EditProfile: undefined;
} 