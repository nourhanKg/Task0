import ElementCard from "../layout/ElementCard";
import ElementCode from "../layout/ElementCode";
import { FormLabel } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";
const SelectInput = function () {
  const installCode = `npm i multiselect-react-dropdown`;
  const importCode = `import { Multiselect } from "multiselect-react-dropdown"

//You can use useState to define your select options
const [selectOptions, setSelectOptions] = useState([
  { option: "one", id: 1 },
  { option: "two", id: 2 },
  { option: "three", id: 3 },
  { option: "four", id: 4 },
  { option: "five", id: 5 },
]);
  `;
  const code = `
<FormLabel htmlFor="form.fileUploadInput">
Single Select Input<span className="text-danger">*</span>
</FormLabel>
<Multiselect
options={selectedOptions}
displayValue="option"
singleSelect
showArrow
></Multiselect>
<br />
<FormLabel htmlFor="form.singleSelectInput">
Multiselect Input<span className="text-danger">*</span>
</FormLabel>
<Multiselect
id="form.singleSelectInput"
options={selectOptions}
displayValue="option"
showArrow
></Multiselect>
    `;
  const [selectOptions, setSelectOptions] = useState([
    { option: "one", id: 1 },
    { option: "two", id: 2 },
    { option: "three", id: 3 },
    { option: "four", id: 4 },
    { option: "five", id: 5 },
  ]);
  return (
    <>
      <ElementCard name="Select Input">
        <FormLabel htmlFor="form.fileUploadInput">
          Single Select Input<span className="text-danger">*</span>
        </FormLabel>
        <Multiselect
          options={selectOptions}
          displayValue="option"
          singleSelect
          showArrow
        ></Multiselect>
        <br />
        <FormLabel htmlFor="form.singleSelectInput">
          Multiselect Input<span className="text-danger">*</span>
        </FormLabel>
        <Multiselect
          id="form.singleSelectInput"
          options={selectOptions}
          displayValue="option"
          showArrow
        ></Multiselect>
      </ElementCard>
      <ElementCode code={installCode}></ElementCode>
      <ElementCode code={importCode}></ElementCode>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default SelectInput;
