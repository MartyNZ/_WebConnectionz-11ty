import{FaFacebook} from 'react-icons/fa'
export default {
  name:'facebook',
  title:'Facebook',
  type:'object',
  icon:FaFacebook,
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
      initialValue:'Facebook',
      // readOnly:true,
      // hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.facebook.com/',
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