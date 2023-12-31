const hero= {
    name:'hero',
    title:'Hero',
    type:'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
        
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'array',
            of:[{
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                      hotspot: true,
                    },
                }]
        },
    ]
    }
    export default hero;