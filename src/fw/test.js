/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http = require('http'), url=require('url');

var server = http.createServer(function(req, res) {
  /*  console.log(req);
    //console.log(res);
    
    */
    console.log('HEADERS', req.headers );   // {host,user-agent,...} 
    console.log('URL', req.url, url.parse(req.url) );    
    console.log('METHOD', req.method );
    
    /*
    server.i +=1;
    console.log( server.i );
    
    res.setHeader('Set-Cookie','toto=azdzadza');
    res.setHeader('Set-Cookie','totoqz=azdzadza');
    */
  res.writeHead(200,{ 'Set-Cookie':['wow=testdecookie; Max-Age=100000;','test=zadaze; HttpOnly;','wowsess=testdecookie']});
  res.end('Salut tout le monde !');
    
});
server.i=0;
server.listen(7800);




//http.createServer(fw.handleRequest);