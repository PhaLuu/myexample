import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sass/globals.scss";
import { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //request boostrap js
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Head>
        <title>myExample: Cool Application</title>
        <meta
          name="description"
          content="myExample: 2022"
        ></meta>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>)
}

export default MyApp
