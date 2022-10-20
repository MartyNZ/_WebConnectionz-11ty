const client = require('../utils/sanityClient')

async function loadAbout() {
  const about = await client
    .fetch(
      `
      *[_type == 'about']{
        title,
        byline,
        content,
        'btnLink':button.btnLink,
        'btnLinkType':button.btnLinkType,
        'btnText':button.btnText,
        'imageUrl':image.asset->url,
      }[0]
      `
    )

    .catch((err) => console.error(err));

  return about;
}

module.exports = loadAbout;