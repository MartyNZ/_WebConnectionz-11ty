import { FaTools } from 'react-icons/fa'

export default {
  name:'services',
  title:'Services',
  type:'document',
  icon:FaTools,
  fields:[
    {
      name:'title',
      title:'Services',
      type:'string',
      initialValue:'Services',
      readOnly:true,

    },
    {
      name:'summary',
      title:'Summary',
      type:'text',
      rows:5
    },
    {
      name:'image',
      title:'Image',
      type:'image',
      options:{
        hotspot:true
      }
    },
    {
      name:'serviceItem',
      title:'Service Item',
      type:'array',
      of:[{type:'service'}]
    }
  ]
}