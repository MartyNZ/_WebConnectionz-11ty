const client = require('../utils/sanityClient')

async function loadHero() {
  const hero = await client
    .fetch(
      `
      *[_type == 'hero']{
        content,
        byline,
        'imageUrl':image.asset->url,
        buttons[]{
         btnText,
         btnLinkType,
         btnLink,
         "btnIconName":btnIcon.name,
         "btnIconProvider":btnIcon.provider
        }
      }[0]
      `
    )

    .catch((err) => console.error(err));

  return hero;
}

module.exports = loadHero;