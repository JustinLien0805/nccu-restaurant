import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="dark">
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
