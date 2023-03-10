import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
//imports

const MainApp = () => {
  return <App />;
};

export default MainApp;

AppRegistry.registerComponent(appName, () => MainApp);
