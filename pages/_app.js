import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sass/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //request boostrap js
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
