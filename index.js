import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {CookieProvider} from './source/Contexts/CookieContext';

const MainApp = () => {
  return (
    <CookieProvider>
      <App />
    </CookieProvider>
  );
};

export default MainApp;

AppRegistry.registerComponent(appName, () => MainApp);
