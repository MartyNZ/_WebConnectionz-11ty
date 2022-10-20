const client = require('../utils/sanityClient')

async function loadCounts() {
  const counts = await client
    .fetch(
      `
      *[_type=="counts"]
      `
    )

    .catch((err) => console.error(err));

  return counts;
}

module.exports = loadCounts;