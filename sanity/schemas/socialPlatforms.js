const PLATFORMS = [
  { value:'twitter', title:'Twitter'},
  { value:'facebook', title:'Facebook'},
  { value:'linkedin', title:'LinkedIn'},
  { value:'youtube', title:'You Tube'},
  { value:'instagram', title:'Instagram'},
  { value:'github', title:'Github'}
]

export default{
  name:'socialPlatforms',
  type:'object',
  fields:[
    {
      name:'platform',
      title:'Platform Name',
      type:'string',
      options:{
        list:PLATFORMS,
        layout:'dropdown'
      }
    },
    {
      name:'url',
      title:'Url',
      type:'string'
    }
  ]
}