
var conf = require('application.conf.js'),
    application = new require('application')( conf ),
    
    // NODE JS librairies.
    cluster = require('cluster'),
    nCPUs = require('os').cpus().length,
    http = require('http');
    
if( cluster.isMaster ){
    for( var i=0; i<nCPUs; i++)
        cluster.fork();
}
else{    
    http.createServer( application.handle ).listen(80);
}
