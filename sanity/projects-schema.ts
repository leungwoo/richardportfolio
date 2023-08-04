const projects = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        descripton: 'This is the description of the project',
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        link: ' This is the link to the project',
        name: 'link',
        title: 'Link',
        type: 'url',
      },
    
      {
        name: 'technology',
        title: 'Technology',
        type: 'array',
        of:[{ type:'string'}
        ]
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'array',
        of:[{type:"image"}],
        options: {
          hotspot: true,
        },
        store: {
            originalFilename: true
          }
      },  
      {
        name:"slug",
        title:"Slug",
        type:"slug",
        options: {
            source: "title",
          },
    },
    {
        name: "featured",
        title: "Featured",
        type: "boolean",
        description: "Check this box if the product is a featured.",
      },
    ],
  };
  export default projects;