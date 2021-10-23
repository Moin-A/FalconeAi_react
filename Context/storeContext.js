import { createContext, useContext } from 'react';
import store from "../ReduxSrore/configureStore"
const AppContext = createContext();

export function StoreContext({ children }) {
  let sharedState = {store}
  

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}