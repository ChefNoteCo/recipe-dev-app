import configureMeasurements, { volume, mass } from 'convert-units';

const convert = configureMeasurements({ volume, mass });

export default convert;
