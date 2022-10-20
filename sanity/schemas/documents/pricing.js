import { FaDollarSign } from 'react-icons/fa'

export default {
  name:'pricing',
  title:'Pricing Table',
  type:'document',
  icon:FaDollarSign,
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields:[
    {
      name:'title',
      title:'Pricing Table',
      type:'string',
      initialValue:'Pricing Table',
      readOnly:true,
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string',
      initialValue:'Check Our Pricing'
    },
    {
      name:'pricingItem',
      title:'Pricing Plan',
      type:'array',
      of:[{type:'pricingItem'}]
    }
  ]
}