module.exports = (config) => {
  // specify folders to be copied to the output folder
  config.addPassthroughCopy('./src/dist/');

  config.addFilter('json', (str) => JSON.stringify(str));
  config.addFilter('date', (date) => new Date(date).toLocaleString('en-us'));

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
