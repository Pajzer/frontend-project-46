import getStylish from './stylish.js';

const getReport = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'json':
      return JSON.stringify(data, null);
    default:
      throw new Error(`Invalid format: '${format}'! Use a different format.`);
  }
};

export default getReport;
