import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">账号中心</Heading>

      <Row>
        <Heading as="h3">账号信息</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">密码</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
