import { useFormikContext } from "formik";
import React from "react";
import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <Picker
        item={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={() => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
