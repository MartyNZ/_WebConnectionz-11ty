export default {
  name:'siteSettings',
  title:'Site Settings',
  type:'document',
  fieldsets:[
    {
      name:'siteTheme',
      title:'Site Theme',
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
      name:'baseFont',
      title:'Base Font',
      type:'string',
      description:'This font will be use for all top level headers and page text.',
      fieldset:'siteTheme'
    },
    {
      name:'accentFont',
      title:'Accent Font',
      type:'string',
      description:'This font will be use to show emphasis on lower level headers and text emphahsis.',
      fieldset:'siteTheme'
    },
    {
      name:'clrDefault',
      title:'Default Colour',
      type:'color',
      fieldset:'siteTheme',
      initialValue:'#444444'
    },
    {
      name: 'clrPrimary',
      title: 'Primary Colour',
      type: 'color',
      fieldset:'siteTheme'
    },
    {
      name: 'clrSecondary',
      title: 'Secondary Colour',
      type: 'color',
      fieldset:'siteTheme'
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