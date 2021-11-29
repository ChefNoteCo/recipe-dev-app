const convert = require('convert-units');

const Ingredient = ({ id, name, unit = 'g', quantity = 0 }) => {
  // console.log(convert().possibilities());
  if (convert().possibilities().indexOf(unit) === -1) {
    throw new Error('Provided unit of measurement not a valid option.');
  }

  return {
    id,
    name,
    unit,
    quantity,
  };
};

export default Ingredient;
