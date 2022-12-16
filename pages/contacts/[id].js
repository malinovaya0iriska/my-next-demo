import Heading from "../../components/Heading";
import Head from "next/head";
import User from "../../components/User";


export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { contact: data },
  }
};

const Contact = ({contact}) => (
  <>
  <Head>
      <title>Contact</title>
    </Head>
    <User user={contact}/>
  </>
);

export default Contact;
