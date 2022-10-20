import{FaSlack} from 'react-icons/fa'
export default {
  name:'slack',
  title:'Slack',
  type:'object',
  icon:FaSlack,
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
      initialValue:'Slack',
      readOnly:true,
      // hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.slack.com/@',
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