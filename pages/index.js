import Head from "next/head";
import Image from "next/image";
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss';
import winter from '../public/winter.jpg';


const Home = () => (
  
<div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />

   <Image
      src={winter}
      width={1200} 
      height={850} 
      alt="preview"
      placeholder="blur"
    />
  </div>
);

export default Home;
