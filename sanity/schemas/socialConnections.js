export default{
  name:'socialConnections',
  title:'Social Connections',
  type:'object',
  fields:[
    {
      name:'platform',
      title:'Platform',
      type:'array',
        of:[{type:'socialPlatforms'}]
    },
    {
      name:'username',
      title:'Username',
      type:'string'
    }
  ],
  preview: {
    select: {
      platform: 'platform.platform',
      username: 'username'
    },
    prepare:({platform,username})=>{

      return{
        title:platform,
        subtitle:username
      }
    }
  },
}