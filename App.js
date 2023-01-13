// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import TabNavigator from "./src/Components/Navigation/TabNavigator";
// import { StackNavigation } from "./src/Components/Navigation/StackNavigation";
// //import DrawerNavigator from "./src/Components/Navigation/DrawerNavigation";

// const App = () => {
//   return(
//   <NavigationContainer>
//     <StackNavigation />
//   </NavigationContainer>
//   ); 
// }
// export default App;

import React from 'react'

import MainStackNavigator from './src/Components/Navigation/AppNavigator'

export default function App() {
  return <MainStackNavigator />
}