function getFormData(form) {
  const inputs = form.childNodes;
  const inputData = {};

  inputs.forEach((input) => {
    if (input.name != undefined && input.name != "")
        inputData[input.name] = input.value;
    //   console.log(input.name, input.value);
  });

  return inputData;
}

export { getFormData };
