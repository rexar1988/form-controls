import Select from './controls/select/select.js'
const selectOptions = {
  placeholder: 'Select cars',
  data: [
    {
      label: 'Angular',
      value: 'angular_value'
    },
    {
      label: 'VueJS',
      value: 'vue_value'
    },
    {
      label: 'ReactJS',
      value: 'react_value'
    },
    {
      label: 'Swelte',
      value: 'swelte_value'
    },
  ]
};
const select = new Select('.form__control--select', selectOptions);
// select.
