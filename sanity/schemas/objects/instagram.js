import{FaInstagram} from 'react-icons/fa'
export default {
  name:'instagram',
  title:'Instagram',
  type:'object',
  icon:FaInstagram,
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
      initialValue:'Instagram',
      readOnly:true,
      // hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.instagram.com/',
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