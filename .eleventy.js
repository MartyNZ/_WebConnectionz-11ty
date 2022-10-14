module.exports = function(eleventyConfig){
  eleventyConfig.addWatchTarget('src/_scss/');
  eleventyConfig.addWatchTarget('src/js/');

  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",
      output: "public"
    }
  }
}