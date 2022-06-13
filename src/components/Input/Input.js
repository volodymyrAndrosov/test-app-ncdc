import { useRef, useState } from "react";
import styles from "./Input.module.css";

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const timeoutIdContainer = useRef(null);

  const onChange = e => {
    const updatedValue = e.target.value;
    setValue(updatedValue);
    clearTimeout(timeoutIdContainer.current);

    const timeoutId = setTimeout(() => {
      setInputValue(updatedValue);
    }, 500);

    timeoutIdContainer.current = timeoutId;
  };

  return <input type='text' value={value} onChange={onChange} placeholder='Search' className={styles.Input} />;
};

export default Input;
