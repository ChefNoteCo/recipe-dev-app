import { nanoid } from 'nanoid/non-secure';

const BaseInstruction = ({ id = nanoid(), label, order }) => {
  return {
    id,
    label,
    order,
  };
};

export default BaseInstruction;
