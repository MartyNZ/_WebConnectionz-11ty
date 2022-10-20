export default {
  name:'siteSettings',
  title:'Site Settings',
  type:'document',
  fieldsets:[
    {
      name:'siteColours',
      title:'Site Colours',
      options:{columns:2,collapsible:true}
    }
  ],
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'
  ],
  fields:[
    {
      name:'siteOwner',
      title:'Site Owner',
      type:'string'
    },
    {
      name:'logo',
      title:'Logo',
      type:'image'
    },
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name:'clrDefault',
      title:'Default Colour',
      type:'color',
      fieldset:'siteColours',
      initialValue:'#444444'
    },
    {
      name: 'clrPrimary',
      title: 'Primary Colour',
      type: 'color',
      fieldset:'siteColours'
    },
    {
      name: 'clrSecondary',
      title: 'Secondary Colour',
      type: 'color',
      fieldset:'siteColours'
    },
    {
      name:'socialConnections',
      title:'Social Connections',
      type:'array',
      of:[        
        {type:'discord'},
        {type:'facebook'},
        {type:'github'},
        {type:'linkedin'},
        {type:'instagram'},
        {type:'slack'},
        {type:'twitter'},
      ]
    },
    {
      name:'description',
      title:'Site Description',
      type:'text'
    },
    {
      name: 'primaryLocation',
      title: 'Primary Location',
      type: 'reference',
      to:{type:'locations'}
    }
  ]
}