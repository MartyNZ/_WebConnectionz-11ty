const client = require('../utils/sanityClient')

async function loadTeam(){
  const team = await client.fetch(
    `
    *[_type=="team"]{
      title,
      subtitle,
      teamMembers[]{
        firstName,
        lastName,
        role,
        bio,
        'imgUrl':image.asset->url
      },
    }[0]
    `
  )
  .catch((err) => console.error(err));

  // console.log(team);

  return team;
}

module.exports = loadTeam;