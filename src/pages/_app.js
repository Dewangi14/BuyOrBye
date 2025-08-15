import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
  return <>
  <Head>
        <title>BuyOrBye</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}
