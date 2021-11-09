import "../tailwind.css";
import store from "../ReduxSrore/configureStore";
import Page from "../components/page";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Page>
        <main>
          <Component {...pageProps} />
        </main>
      </Page>
    </Provider>
  );
}

export default MyApp;
