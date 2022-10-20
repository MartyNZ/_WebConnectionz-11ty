import{FaDiscord} from 'react-icons/fa'
export default {
  name:'discord',
  title:'Discord',
  type:'object',
  icon:FaDiscord,
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
      initialValue:'Discord',
      readOnly:true,
      hidden:true
    },
    {
      name:'url',
      title:'Platform Url',
      type:'string',
      initialValue:'https://www.discord.com/@',
      fieldset:'userpath'
    },
    {
      name:'username',
      title:'User Name',
      type:'string',
      fieldset:'userpath'
    }
  ],
  // preview:{
  //   select:{
  //     title: 'url',
  //     subtitle: 'username',
  //     icon:icon,
  //   },
  //   prepare(selection){
  //     const {url, username, icon} = selection
  //     const platformUrl = url      
  //     const userPath = platformUrl.concat(username)

  //     return {
  //       title: userPath,
  //       media:icon
  //     }
  //   }
  // }
}