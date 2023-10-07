import React from "react";
import {View, Text} from "react-native";
import Logincompnt from "../../components/Logincompnt";
 
 
const Login = props => (
   <View 
     style={{flex: 1, justifyContent: "center", alignItems: "center"}}
   > 
    <Logincompnt />
   </View>
);
 
export default Login;