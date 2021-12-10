import { nanoid } from 'nanoid/non-secure';

const Instruction = ({ id = nanoid(), label = '', order }) => {
  return {
    id,
    label,
    order,
  };
};

export default Instruction;
