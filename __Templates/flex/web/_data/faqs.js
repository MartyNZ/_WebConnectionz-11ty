const client = require('../utils/sanityClient')

async function loadFaqs() {
  const faqs = await client
    .fetch(
      `
      *[_type=="faqs"]{
        title,
        subtitle,
        questions[]{
          question,
          answer,
          listNumber,
          _key
        }
      }[0]
      `
    )

    .catch((err) => console.error(err));

  return faqs;
}

module.exports = loadFaqs;