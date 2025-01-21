import { useForm } from "react-hook-form";
import styles from "./MyInfo.module.css";
import { useEffect } from "react";

const USER_DATA = "userData";

const MyInfo = () => {
  const { register, handleSubmit, setValue } = useForm();

  //con useEffect seteamos los inputs si el local storage tiene guardados los datos
  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA) || {});

      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      alert(`Hubo un error ${error}`);
    }
  }, [setValue]);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("Usuario actualizado con éxito");
    } catch (error) {
      alert(`Hubo un error: ${error}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          {...register("name", { required: true, minLength: 5, maxLength: 25 })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          {...register("email", {
            required: true,
            minLength: 5,
            maxLength: 100,
          })}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          type="number"
          className={styles.input}
          {...register("age", {
            required: true,
            valueAsNumber: true,
            min: 1,
            max: 70,
          })}
        />
      </label>
      <button className={styles.buttonForm} type="submit">
        Save
      </button>
    </form>
  );
};

export default MyInfo;
