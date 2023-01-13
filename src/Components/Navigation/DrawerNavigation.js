import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Explore from  './../../Screens/Explore';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Exlpore" component={Explore} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;