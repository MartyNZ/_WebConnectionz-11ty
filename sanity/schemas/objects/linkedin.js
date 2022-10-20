import{FaLinkedin} from 'react-icons/fa'
export default {
  name:'linkedin',
  title:'LinkedIn',
  type:'object',
  icon:FaLinkedin,
  fieldsets:[
    {
      name:'userpath',
      title:'User Path',
      options:{columns:2,collapsible:false}
    }
  ],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string',
      initialValue:'Linked In',
      // readOnly:true,
      // hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.linkedin.com/in/',
      fieldset:'userpath'
    },
    {
      name:'username',
      title:'User Name',
      type:'string',
      fieldset:'userpath'
    }
  ]
}