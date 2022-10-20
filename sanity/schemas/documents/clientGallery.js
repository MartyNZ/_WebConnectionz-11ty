export default {
  name:'clientGallery',
  title:'Client Gallery',
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
      initialValue:'Our Featured Clients',
      readOnly:true,
      hidden:true
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string'
    },
    {
      name:'clientList',
      title:'Client List',
      type:'array',
      of:[{type:'client'}]
    }
  ]
}