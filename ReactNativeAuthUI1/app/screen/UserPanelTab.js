import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import SideBar from './SideBar';
import ChangePasswordScreen from './auth/ChangePasswordScreen';

const Drawer = createDrawerNavigator();
const UserPanelTab = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />} screenOptions={{ headerStyle: { backgroundColor: 'purple' }, headerTintColor: 'white' }}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerTitle: 'Change Password' }} />
    </Drawer.Navigator>
  )
}

export default UserPanelTab