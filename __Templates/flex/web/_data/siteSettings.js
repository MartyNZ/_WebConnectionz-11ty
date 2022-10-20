const client = require('../utils/sanityClient')

async function loadSettings() {
  const siteSettings = await client
    .fetch(
      `
      *[_type=="siteSettings"]{
        siteOwner,
        title,
        'logoUrl':logo.asset->url,
        description,
        'email':primaryLocation->email,
        'address':primaryLocation->address,
        'addressExt':primaryLocation->addressExt,
        'city':primaryLocation->city,
        'postcode':primaryLocation->postcode,
        'clrDefault':clrDefault.hex,
        'clrPrimary':clrPrimary.hex,
        'clrSecondary':clrSecondary.hex,
        primaryLocation->{
          'lat':mapLocation.lat,
          'lng':mapLocation.lng,
          'phoneNumbers':phoneNumbers[]{
            number,
            label,
          },
          socialLinks
        },
       }[0]
      `
    )

    .catch((err) => console.error(err));

  return siteSettings;
}

module.exports = loadSettings;