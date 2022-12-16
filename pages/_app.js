import Head from "next/head";
import Layout from "../components/Layout";
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
 <Layout>
    <Head/>
    <main>
      <Component {...pageProps} />
   </main>
  </Layout>
);

export default MyApp;
