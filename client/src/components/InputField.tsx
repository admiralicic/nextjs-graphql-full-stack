import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} id={field.name} {...props} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
