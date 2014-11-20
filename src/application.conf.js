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
            adapter: '../node_modules/nfw/helpers/session/memory/adapter.js',
            memcache:{
                
            },
        }
    }
};