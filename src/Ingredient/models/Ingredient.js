import { nanoid } from 'nanoid/non-secure';
import convert from '../../app/helpers/convertUnits';

const Ingredient = ({ id = nanoid(), name, baseUnit, baseQuantity }) => {
  if (baseUnit) {
    if (convert().possibilities().indexOf(unit) === -1) {
      throw new Error(
        `Provided unit (${unit}) of measurement not a valid option.`
      );
    }
  }

  return {
    id,
    name,
    baseUnit,
    baseQuantity,
  };
};

export default Ingredient;
