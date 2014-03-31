var conf = {
    controllers:{
        // Controller name: Controller module relative path
        helloworld: 'controller/helloworld.js'
    },
    templates:{
        // Template name : container template path
        helloworld:'view/src/helloworld.jhtml',
        mynameis:'view/src/mynameis.jhtml'
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