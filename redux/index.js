import { AppRegistry } from 'react-native';
import App from './App';
import Tab from './mobx_tabnavigator/screen/Tab';
import { YellowBox, Image } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Method `jumpToIndex` is deprecated. Please upgrade your code to use `jumpTo` instead.'
]);

AppRegistry.registerComponent('redux', () => Tab);
