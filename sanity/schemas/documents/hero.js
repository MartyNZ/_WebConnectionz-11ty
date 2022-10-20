import { FaBolt } from 'react-icons/fa'

export default {
  name:'hero',
  title:'Hero',
  type:'document',
  icon:FaBolt,
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields:[
    {
      name:'byline',
      title:'Byline',
      type:'string'
    },
    {
      name: 'content',
      title:'Content',
      type:'portableText'
    },
    {
      name:'buttons',
      title:'Buttons',
      type:'array',
      of: [{type: 'button'}]
    },
    {
      name:'image',
      title:'Image',
      type:'image'
    }
  ]
}