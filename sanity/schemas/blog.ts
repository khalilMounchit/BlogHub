export default {
    type:'document',
    name:'blog',
    title:'Blog',
    fields:[
        {
            type:'string',
            name:"title",
            title:'Title Of Blog',
        },
       
        {
            type:'slug',
            name:"slug",
            title:'Slug Of Article ',
            options:{
                source:'title',
            }
        },
        {
            type:'image',
            name:"titleImage",
            title:'Title Of Image',
        },
        {
            type:'string',
            name:"smallDesc",
            title:'Small Description ',
        },
        {
            type:"array",
            name:"content",
            title:'Content Of Blog',
            of: [
                {type:"block",}
                
            ]
          
            
        },
    ],


}