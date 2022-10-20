import{FaTwitter} from 'react-icons/fa'
export default {
  name:'twitter',
  title:'Twitter',
  type:'object',
  icon:FaTwitter,
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
      initialValue:'Twitter',
      readOnly:true,
      // hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.twitter.com/',
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