const client = require('../utils/sanityClient')

async function loadValues() {
  const values = await client
    .fetch(
      `
      *[_type=="values"]{
        title,
        summary,
        value[]{
          title,
          'valueImg':image.asset->url,
          description
        }
      }[0]
      `
    )

    .catch((err) => console.error(err));

      // console.log(values);

  return values;
}

module.exports = loadValues;