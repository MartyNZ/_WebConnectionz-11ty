const CATEGORIES = [
  {value:'App', title:'App'},
  {value:'Product', title:'Product'},
  {value:'Branding', title:'Branding'},
  {value:'Books', title:'Books'},
  {value:'Web', title:'Web'}
]

export default {
  name:'portfolioItem',
  title:'Portfolio Item',
  type:'object',
  fields:[
    {
      name:'title',
      title:'Project Title',
      type:'string'
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string'
    },
    {
      name:'category',
      title:'Category',
      type:'string',
      options:{
        list:CATEGORIES,
        layout:'dropdown'
      }
    },
    {
      name:'client',
      title:'Client',
      type:'string'
    },
    {
      name:'projectDate',
      title:'Project Date',
      type:'string'
    },
    {
      name:'projectUrl',
      title:'Project Url',
      type:'string',
      initialVale:'www.example.com'
    },
    {
      name:'description',
      title:'Description',
      type:'portableText'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
  ]
}