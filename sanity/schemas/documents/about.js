export default {
  name:'about',
  title:'About Us',
  type:'document',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    {
      name:'byline',
      title:'Byline',
      type:'text'
    },
    {
      name:'content',
      title:'Content',
      type:'portableText'
    },
    {
      name:'button',
      title:'Button',
      type:'button'
    },
    {
      name:'image',
      title:'Image',
      type:'image'
    },
  ]
}