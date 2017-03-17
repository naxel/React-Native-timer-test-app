import React from 'react';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, } from 'redux';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import appReducer from './modules/reducer';

const screens = {
  Home: { screen: HomeScreen },
  Result: { screen: ResultScreen },
};

const AppNavigator = DrawerNavigator(screens);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const mainReducer = combineReducers({
  nav: navReducer,
  app: appReducer
});

const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
));


const store = createStore(mainReducer);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Main;
