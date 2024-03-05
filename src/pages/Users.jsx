import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">创建新账号（需联系管理员审核）</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
