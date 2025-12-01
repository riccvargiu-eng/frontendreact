import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, setValue, reset };
}
