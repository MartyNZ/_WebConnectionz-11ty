const LAYOUTS = [
  {value:'01', title:'One'},
  {value:'02', title:'Two'},
  {value:'03', title:'Three'},
]

export default {
  name:'features',
  title:'Features',
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
      initialValue:'Features',
      readOnly:true,
      hidden:true
    },
    {
      name:'headline',
      title:'Headline',
      type:'string'
    },
    {
      name:'feature',
      title:'Feature',
      type:'array',
      of:[{type:'feature'}]
    },
    {
      name:'images',
      title:'Images',
      type:'array',
      of:[{type:'image'}]
    },
    {
      name:'layout',
      title:'Layout',
      type:'string',
      options:{
        list:LAYOUTS,
        layout:'dropdown'
      }
    }
  ]
}