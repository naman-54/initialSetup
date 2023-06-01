import React from 'react';
// import MainNavigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import Loader from './src/views/hoc/loader';
import MainNavigation from './src/navigation/navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation token={false} />
        <Loader />
      </Provider>
    </>
  );
};

export default App;
