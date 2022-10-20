// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import document schemas
import siteSettings from './documents/siteSettings'
// import hero from './documents/hero'
// import about from './documents/about'
import locations from './documents/locations'
// import team from './documents/team'
// import testimonials from './documents/testimonials'
// import clientGallery from './documents/clientGallery'
// import values from './documents/values'
// import services from './documents/services'
// import pricing from './documents/pricing'
// import portfolio from './documents/portfolio'
// import features from './documents/features'
// import faqs from './documents/faqs'
// import counts from './documents/counts'

// then we import object
import portableText from './objects/portableText'
import discord from './objects/discord'
import facebook from './objects/facebook'
import github from './objects/github'
import instagram from './objects/instagram'
import linkedin from './objects/linkedin'
import slack from './objects/slack'
import twitter from './objects/twitter'
import phone from './objects/phone'
import button from './objects/button'
// import portfolioItem from './objects/portfolioItem'
// import testimonial from './objects/testimonial'
// import teamMember from './objects/teamMember'
// import client from './objects/client'
// import value from './objects/value'
// import service from './objects/service'
// import pricingItem from './objects/pricingItem'
// import feature from './objects/feature'

// To be refactored
// import socialConnections from './socialConnections'
// import socialPlatforms from'./socialPlatforms'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    locations,
    phone,
    // socialConnections,
    // socialPlatforms,
    portableText,
    discord,
    facebook,
    github,
    instagram,
    linkedin,
    slack,
    twitter,
    button,
    // hero,
    // about,
    // values,
    // value,
    // counts,
    // features,
    // feature,
    // services,
    // service,
    // pricing,
    // pricingItem,
    // faqs,
    // portfolio,
    // portfolioItem,
    // team,
    // testimonials,
    // testimonial,
    // teamMember,
    // clientGallery,
    // client
  ]),
})
