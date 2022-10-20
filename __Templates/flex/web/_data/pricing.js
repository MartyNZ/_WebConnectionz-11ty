const client = require('../utils/sanityClient')

async function loadPricing(){
  const pricing = await client.fetch(
    `
    *[_type=="pricing"]{
      title,
      subtitle,
      pricingItem[]{
        title,
        featured,
        price,
        colour,
        details,
        'imgUrl':image.asset->url,
        'colour':colour.hex,
      }
    }[0]
    `
  )
  .catch((err) => console.error(err));

  // console.log(pricing);

  return pricing;
}

module.exports = loadPricing;