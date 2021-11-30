const Ingredient = ({ id, name, baseUnit = 'g', baseQuantity = 1 }) => {
  return {
    id,
    name,
    baseUnit,
    baseQuantity,
  };
};

export default Ingredient;
