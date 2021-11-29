export const sortAscending = attribute => {
  return (firstEl, secondEl) => {
    console.log('el', firstEl, secondEl);
    const first = attribute ? firstEl[attribute] : firstEl;
    const second = attribute ? secondEl[attribute] : secondEl;
    if (first < second) {
      return -1;
    }
    if (first > second) {
      return 1;
    }
    return 0;
  };
};

export const sortDescending = attribute => {
  return (firstEl, secondEl) => {
    const first = attribute ? firstEl[attribute] : firstEl;
    const second = attribute ? secondEl[attribute] : secondEl;
    if (first > second) {
      return -1;
    }
    if (first < second) {
      return 1;
    }
    return 0;
  };
};
