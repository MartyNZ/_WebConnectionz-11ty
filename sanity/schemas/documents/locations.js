import { BsPinMapFill } from 'react-icons/bs'

export default {
  name: 'locations',
  title: 'Locations',
  type: 'document',
  icon: BsPinMapFill,
  fields: [
    {
      name: 'address',
      title: 'Street and Number',
      type: 'string'
    },
    {
      name: 'addressExt',
      title: 'Address - extended',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'postcode',
      title: 'Post Code',
      type: 'string'
    },
    {
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{type: 'phone'}]
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      name:'socialConnections',
      title:'Social Connections',
      type:'array',
      of:[        
        {type:'discord'},
        {type:'facebook'},
        {type:'github'},
        {type:'linkedin'},
        {type:'instagram'},
        {type:'slack'},
        {type:'twitter'},
      ]
    },
    {
      name: 'description',
      title: 'description',
      type: 'portableText'
    },
    {
      name:'mapLocation',
      title:'Location on Map',
      type:'geopoint'
    }
  ]
}