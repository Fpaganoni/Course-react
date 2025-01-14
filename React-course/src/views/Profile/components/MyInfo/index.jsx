import { useForm } from "react-hook-form";
import styles from "./MyInfo.module.css";

const MyInfo = () => {
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {};

  return (
    <form className={styles.form} onSubmit={handleFormSubmit(handleFormSubmit)}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          {...register("name", { required: true })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          {...register("email", { required: true })}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          className={styles.input}
          {...register("age", { required: true })}
        />
      </label>
    </form>
  );
};

export default MyInfo;
