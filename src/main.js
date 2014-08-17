
var cluster = require('cluster'),
    nCPUs = require('os').cpus().length;
        
if( cluster.isMaster ){
    for( var i=0; i< 1 ; i++)
        cluster.fork();
}
else{
    var conf = require('./application.conf.js'),
    application = new (require('fwjs'))(conf);
    
    var http = require('http');
    
    console.log( application.handle );
    
    http.createServer( application.handle ).listen(8074);
}
