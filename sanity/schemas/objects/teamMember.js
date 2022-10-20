import { BiGroup } from 'react-icons/bi'

export default {
  name:'teamMember',
  title:'Team Member',
  icon:BiGroup,
  type:'object',
  fields:[
    {
      name:'firstName',
      title:'First Name',
      type:'string'
    },
    {
      name:'lastName',
      title:'Last Name',
      type:'string'
    },
    {
      name:'role',
      title:'Role',
      type:'string'
    },
    {
      name:'image',
      title:'Image',
      type:'image'
    },
    {
      name:'bio',
      title:'Biography',
      type:'portableText'
    },
    // {
    //   name:'socialConnections',
    //   title:'Social Connections',
    //   type:'array',
    //   of:[{type:'socialConnections'}]
    // }
  ],
  // preview: {
  //   select: {
  //     firstname: 'firstName',
  //     lastname: 'lastName',
  //     subtitle:'role',
  //     media:'image'
  //   },
  //   prepare({ firstname, lastname, image }) {
  //     return {
  //       title: `${firstname}  ${lastname}`,
  //       subtitle,
  //       media: image,
  //     };
  //   },
  // },
}