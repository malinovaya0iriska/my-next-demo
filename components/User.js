import Heading from "./Heading";

const User = ({ user }) => {
  const { name, email, phone, website } = user || {};

  if (!user) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </>
  );
}

export default User;
