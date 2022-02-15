import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as AlbumProvider } from "./src/context/AlbumContext";
import ShowScreen from "./src/screens/ShowScreen";
import DetailScreen from "./src/screens/DetailScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Detail: DetailScreen
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