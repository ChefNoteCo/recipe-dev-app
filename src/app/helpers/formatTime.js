/**
 *
 * @param {string} format The format to display the time
 * @returns string representation of the formatted time
 */
export const formatTime = (time = 0, format) => {
  switch (format) {
    case 'hours':
      return `${time / 60} hours`;
    default:
      // Minutes
      return `${time} minutes`;
  }
};
