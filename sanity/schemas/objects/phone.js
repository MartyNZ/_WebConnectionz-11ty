export default {
  name: 'phone',
  title: 'Phone Numbers',
  type: 'object',
  fields: [
    {
      name:'label',
      title:'Label',
      type:'string',
      description:'Please enter the number as you would like it displayed on the page',
      initialValue:'(025)-5555-5555, (03) 55 5555'
    },
    {
    name: 'number',
    title: 'Number',
    type: 'string',
    description:'Please enter the number without spaces or special characters eg.()',
    initialValue:'02255555555'
   }
  ]
}