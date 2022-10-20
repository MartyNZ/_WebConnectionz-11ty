const client = require('../utils/sanityClient')

async function loadFeatures() {
  const features = await client
    .fetch(
      `
      *[_type=="features"]{
        title,
         headline,
         images[]{'url':asset->url},
         feature[]{
           title,
           summary,
           description,
           icon
         }
       }[0]
      `
    )

    .catch((err) => console.error(err));

  return features;
}

module.exports = loadFeatures;