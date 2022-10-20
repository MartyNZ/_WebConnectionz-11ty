const client = require('../utils/sanityClient')

async function loadTestimonials() {
  const testimonials = await client
    .fetch(
      `
      *[_type=="testimonials"]{
        title,
        subtitle,
        testimonial[]{
          name,
          quote,
          role,
          stars,
          'imgUrl':image.asset->url
        }
      }[0]
      `
    )

    .catch((err) => console.error(err));

  return testimonials;
}

module.exports = loadTestimonials;