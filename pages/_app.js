import "../styles/globals.css";
import { StoreContext } from "../Context/storeContext";
import Page from "../components/page";
export function reportWebVitals(metric) {
  if (metric.label === "custom") {
    console.log(metric);
  }
}
function MyApp({ Component, pageProps }) {
  return (
    <StoreContext>
      <Page>
        <main>
          <Component {...pageProps} />
        </main>
      </Page>
    </StoreContext>
  );
}

export default MyApp;
