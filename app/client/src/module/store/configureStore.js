import { createStore } from 'redux';
import { reducers } from './root';

export default state => {
  const store = createStore(
    reducers,
    state
  );

  return store;
};
