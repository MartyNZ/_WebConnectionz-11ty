const client = require('../utils/sanityClient')

async function loadPortfolio(){
  const portfolio = await client.fetch(
    `
    *[_type=="portfolio"]{
      title,
      subtitle,
      portfolioItems[]{
        title,
        subtitle,
        images[]{
          'imgUrl':asset->url
        },
        description,
        category,
        client,
        projectDate,
        projectUrl,
      },
    }[0]
    `
  )
  .catch((err) => console.error(err));

  // console.log(portfolio);

  return portfolio;
}

module.exports = loadPortfolio;