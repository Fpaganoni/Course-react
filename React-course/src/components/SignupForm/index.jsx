import { useForm } from "react-hook-form";

const SingupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form className="singup_form" onSubmit={handleSubmit(handleSubmitForm)}>
      <label className="labels_form">
        Name:
        <input {...register("name", { required: true, maxLength: 30 })} />
      </label>

      <label className="labels_form">
        Age:
        <input
          {...register("age", { required: true, type: Number, min: 18 })}
        />
      </label>

      <label className="labels_form">
        Address:
        <input {...register("address", { required: true })} />
      </label>

      <label className="labels_form">
        Zipcode:
        <input {...register("zipcode", { required: true })} />
      </label>

      <label className="labels_form">
        Phone:
        <input {...register("phone", { required: true })} />
      </label>

      <div className="container_buttons_form">
        <button
          type="button"
          className="buttons_form"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="buttons_form" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SingupForm;
