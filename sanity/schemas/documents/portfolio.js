export default{
  name:'portfolio',
  title:'Portfolio',
  type:'document',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'
  ],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string',
      initialValue:'Portfolio',
      readOnly:true
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string'
    },
    {
      name:'portfolioItems',
      title:'Portfolio Items',
      type:'array',
      of:[{type:'portfolioItem'}]
    }
  ]
}