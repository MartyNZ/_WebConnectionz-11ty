
const fs = require("fs");

const outputFile = "./src/_scss/_themes.scss";
const inputFile = "./src/pages/themes.njk";


module.exports = function(eleventyConfig){

  if (fs.existsSync(outputFile)) {
    eleventyConfig.ignores.add(inputFile);
  } else {
    eleventyConfig.ignores.add('src/pages/contact.njk');
    eleventyConfig.ignores.add('src/pages/index.njk');
    eleventyConfig.ignores.add('src/pages/message-received.njk');
    eleventyConfig.ignores.add('src/pages/portfolio-details.njk');
    eleventyConfig.ignores.add('src/pages/service-worker.njk');
    eleventyConfig.ignores.add('src/pages/manifest.njk');
  }

  eleventyConfig.addWatchTarget('src/_scss/');
  eleventyConfig.addWatchTarget('src/js/');

  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });

  // add shortcodes
  eleventyConfig.addShortcode("getYear", function() {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      data: "../_data",
      output: "public"
    }
  }
}