const skills ={
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        
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
export default skills;