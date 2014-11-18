module.exports = {
    modules: {
        helloworld:'helloworld'
    },
    events:{},
    options:{
        
    },
    services:{
        session:{
            unique: true, //false,
            service: '../node_modules/nfw/services/session/service.js'
        }
    }
};