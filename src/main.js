var cluster = require('cluster'),
    nCPUs = require('os').cpus().length;
        
if( cluster.isMaster ){
    for( var i=0; i< 1 ; i++)
        cluster.fork();
}
else{
    var application = new (require('fwjs'))('application.conf.js'),
        http = require('http');
    
    application.on('ready',function(){
        http.createServer( application.handle ).listen(8074);
    });
    
    
}
