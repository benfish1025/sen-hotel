import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="姓名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "必填项" })}
        />
      </FormRow>

      <FormRow label="邮箱" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "必填项",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "请填写有效的电子邮件地址",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="密码（至少8个字符）"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "必填项",
            minLength: {
              value: 8,
              message: "密码长度需要至少8个字符",
            },
          })}
        />
      </FormRow>

      <FormRow label="再次输入密码" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "必填项",
            validate: (value) =>
              value === getValues().password || "密码不一致",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          取消
        </Button>
        <Button disabled={isLoading}>创建账号</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
