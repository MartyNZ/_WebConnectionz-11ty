require('dotenv');

const sanityClient = require("@sanity/client");

const sanity = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn:false

}

module.exports = sanityClient({...sanity});