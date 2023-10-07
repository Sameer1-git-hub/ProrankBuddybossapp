<<<<<<< HEAD
import React from "react";
import {NativeModules} from "react-native";
import Login from "./View/login/Login";
const {RNCustomCode} = NativeModules;
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // exernalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", Login);
};
=======
import { View } from "react-native";

export const applyCustomCode = (externalCodeSetup: any) => {
	// call custom code api here
};

<View> </View>
>>>>>>> 95ebbcaf50001461174ea14ef1aee2540beddd79
