import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="新密码（至少8个字符）"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "密码需要至少8个字符",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="确认密码"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled
          {...register("passwordConfirm", {
            required: "必填项",
            validate: (value) =>
              getValues().password === value || "密码不一致",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          取消
        </Button>
        <Button disabled>更新密码</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
