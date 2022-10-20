export default {
  name:'pricingItem',
  title:'Pricing Plan',
  type:'object',
  fields:[
    {
      name:'title',
      title:'Plan Title',
      type:'string'
    },
    {
      name:'featured',
      title:'Featured Item?',
      type:'boolean',
      initialValue:false
    },
    {
      name:'price',
      title:'Price',
      type:'string'
    },
    {
      name:'colour',
      title:'Item Colour',
      type:'color'
    },
    {
      name:'image',
      title:'Image',
      type:'image'
    },
    {
      name:'details',
      title:'Plan Details',
      type:'portableText'
    }
  ]
}