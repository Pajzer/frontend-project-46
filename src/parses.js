const parse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown parsing format: ${format}`);
  }
};

export default parse;