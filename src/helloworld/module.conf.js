module.exports = {
    controllers:{
        // Controller name: Controller module relative path
        helloworld: 'controller/helloworld.js'
    },
    templates:{
        // Template name : container template path
        helloworld:'view/helloworld.tpl.js',
        mynameis:'view/mynameis.tpl.js'
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