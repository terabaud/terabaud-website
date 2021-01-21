module.exports = (config) => {
  // specify folders to be copied to the output folder
  config.addPassthroughCopy('./src/dist/');

  config.addFilter('json', (str) => JSON.stringify(str));

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
