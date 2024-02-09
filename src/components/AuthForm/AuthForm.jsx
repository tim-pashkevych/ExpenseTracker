import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export const AuthForm = ({
  formData,
  buttonText,
  onSumbit,
  initialState,
  validation,
}) => {
  const onSubmitHandel = (data) => onSumbit(data);
  //   const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validation),
    defaultValues: initialState,
  });
  return (
    <form onSubmit={handleSubmit(onSubmitHandel)}>
      {formData?.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>
            <input type={input.type} name={input.name} />
          </label>
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};
