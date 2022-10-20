export default {
  name:'service',
  title:'Service Item',
  type:'object',
  fields:[
    {
      name:'title',
      title:'Service Title',
      type:'string'

    },
    {
      name:'summary',
      title:'Summary',
      type:'text',
      rows:5
    },
    {
      name:'icon',
      title:'Icon',
      type:'string',
      initialValue:'ri-discuss-line icon'
    },
    {
      name:'link',
      title:'Link',
      type:'object',
      fields:[
        {
          name:'lnkTxt',
          title:'Link Text',
          type:'string',
          initialValue:'Read More'
        },
        {
          name:'url',
          title:'Url',
          type:'string',
          initialValue:'#'
        }
      ]
    }
  ]
}