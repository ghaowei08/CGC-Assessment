import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as AlbumProvider } from "./src/context/AlbumContext";
const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Albums'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return <AlbumProvider>
    <App />
  </AlbumProvider>
}