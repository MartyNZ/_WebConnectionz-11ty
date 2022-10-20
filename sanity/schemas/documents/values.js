export default {
  name:'values',
  title:'Our Values',
  type:'document',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields:[
    {
      name:'title',
      title:'Section Title',
      type:'string',
      initialValue:'Our Values',
      readOnly:true
    },
    {
      name:'summary',
      title:'Summary',
      type:'text'
    },
    {
      name:'value',
      title:'Value',
      type:'array',
      of:[{type:'value'}]
    }
  ]
}