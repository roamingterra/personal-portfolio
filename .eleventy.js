module.exports = function (eleventyConfig) {
  // Set input and output directories
  eleventyConfig.addPassthroughCopy("src/en");
  eleventyConfig.addPassthroughCopy("src/fr");

  // Multilingual configuration
  eleventyConfig.addCollection("en", function (collection) {
    return collection.getFilteredByGlob("./src/en/**/*.html");
  });

  eleventyConfig.addCollection("fr", function (collection) {
    return collection.getFilteredByGlob("./src/fr/**/*.html");
  });

  // Set permalink structure
  eleventyConfig.addFilter("permalink", function (url) {
    return url === "/" ? "/" : `/${url}/`;
  });

  // Add CSS file, fonts folder, images folder, and the scrips to passthrough copying
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/script.js");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
