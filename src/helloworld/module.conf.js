var conf = {
    controllers:{
        // Controller name: Controller module relative path
        helloworld: 'helloworld.js'
    },
    templates:{
        // Template name : container template path
        helloworld:'view'
    },
    routes:{
        default:{
            type:'segment',
            route:'.*',
            controller:'helloworld',
            action:'index'
        }
    }
};