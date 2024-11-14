import React from "react";

import { useForm } from "react-hook-form";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

//   console.log(errors.firstname.message);

  return (
    <div>
      <label>FIrst name</label>
      <input
        {...register("firstname", { required: "name is requiredsdsds" })}
        placeholder="enter u r name"
      />

      <p>{errors?.firstname?.message}</p>
      <br />
      <br />
      <br />

      <label> Age</label>
      <input
        {...register("age", { required: "age is requiredsdsds" })}
        placeholder="enter u r age"
      />

      <p>{errors?.age?.message}</p>

      <br />
      <br />
      <br />

      <label> email</label>
      <input
        {...register("email", { required: "email is requiredsdsds" })}
        placeholder="enter u r email"
      />

      <p>{errors?.email?.message}</p>

      <br />
      <br />
      <br />

      <button onClick={handleSubmit(onsubmit)}>Submit</button>
    </div>
  );
}
