import { nanoid } from 'nanoid/non-secure';
import convert from '../../app/helpers/convertUnits';

const Ingredient = ({ id = nanoid(), label, order }) => {
  return {
    id,
    label,
    order,
  };
};

export default Ingredient;
