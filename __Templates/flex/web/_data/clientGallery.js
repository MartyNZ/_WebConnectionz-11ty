const client = require('../utils/sanityClient')

async function loadClients() {
  const clientGallery = await client
    .fetch(
      `
      *[_type=='clientGallery']{
        title,
        subtitle,
        clientList[]{
          title,
          'logoUrl':logo.asset->url
        }
      }[0]
      `
    )

    .catch((err) => console.error(err));

    // console.log(clientGallery)

  return clientGallery;
}

module.exports = loadClients;