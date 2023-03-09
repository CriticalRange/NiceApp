import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MainProvider} from './source/Contexts/MainContext';

const MainApp = () => {
  return (
    <MainProvider>
      <App />
    </MainProvider>
  );
};

export default MainApp;

AppRegistry.registerComponent(appName, () => MainApp);
