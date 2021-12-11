import { nanoid } from 'nanoid/non-secure';
import convert from '../helpers/convertUnits';

const BaseIngredient = ({ id = nanoid(), name, unit, quantity = 0 }) => {
  if (unit) {
    if (convert().possibilities().indexOf(unit) === -1) {
      throw new Error(
        `Provided unit (${unit}) of measurement not a valid option.`
      );
    }
  }

  return {
    id,
    name,
    unit,
    quantity,
  };
};

export default BaseIngredient;
