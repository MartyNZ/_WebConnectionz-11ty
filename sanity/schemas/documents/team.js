import { BiGroup } from 'react-icons/bi'

export default {
  name:'team',
  title:'Team',
  icon:BiGroup,
  type:'document',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string',
      initialValue:'Our Team',
      readOnly:true,
      hidden:true
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string'
    },
    {
      name:'teamMembers',
      title:'Team Members',
      type:'array',
      of:[{type:'teamMember'}]
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