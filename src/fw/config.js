var config = {
    // Options for your application
    options:{
        version:'0.0.1',
        debug:true,
        cdn: {
            url:'//local.static.thestudnet.com/student',
            url_dms:'//local.static.thestudnet.com/dms/data/',
            directory:'/dev'
        },
        api: {
            domain:'local.api.thestudnet.com',
            port:'80',
            url:'api.json-rpc'
        },
        admin: {
            cookies:['API','FORCEAPI'],
            headers:['X-Proxy-UniqueId']
        },
        analytics:{
            id:'', //ID GOOGLE ANALYTICS of STUDENT UI. FOR DEV => UA-45334537-1
            domain:'thestudnet.com'
        }
    },
    modules:{
        connexion:'/path/to/module'
    },
    routes:{
        name3:{
            type:'section',
            route:'/beginning/path/',
            controller:'',
            childs:{
                name:{
                    type:'literal',
                    route:'end/of/path',
                    controller:'test',
                    action:'testAction'
                },
                name2:{
                    type:'segment',
                    route:'alternate/[:end]/of/path',
                    controller:'test',
                    action:'testAction'
                }
            }
        },
        'name':{
            'type':'literal',
            'route':'/route/de/test',
            'controller':'connexion',
            'action':'display'
        },
        'name2':{
            type:'segment',
            route:'/route/[:path]/test/[:number]', // dynamic params must be alphanumeric
            controller:'connexion',
            action:'other',
            constraints:{
                path:'\\w\*', // Zero or more char. '\\w\+' One or more alphanumeric char 
                number:'\\d\*' // Zero or more numeric char. '\\d\+' One or more alphanumeric char
            }
        }
    },
    templates:{
        name:'pathToTemplate'
    }
};