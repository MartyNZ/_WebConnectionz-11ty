// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import document schemas
import siteSettings from './documents/siteSettings'
import locations from './documents/locations'

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
    portableText,
    discord,
    facebook,
    github,
    instagram,
    linkedin,
    slack,
    twitter,
    button,
  ]),
})
