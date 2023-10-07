import React from "react";
import {NativeModules} from "react-native";
import Login from "./View/login/Login";
const {RNCustomCode} = NativeModules;
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // exernalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", Login);
};