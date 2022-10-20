const client = require('../utils/sanityClient')

async function loadServices(){
  const services = await client.fetch(
    `
    *[_type=="services"]{
      title,
      summary,
      serviceItem[]{
        'lnkTxt':link.lnkTxt,
        'lnkUrl':link.url,
        title,
        summary,
        icon
      }
    }[0]
    `
  )
  .catch((err) => console.error(err));

  // console.log(services);

  return services;
}

module.exports = loadServices;