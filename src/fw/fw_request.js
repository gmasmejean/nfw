/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var fw_request = new function(app){
    this.fw = app;
};

fw_request.prototype.handleRequest=function( request, response){
    this.request = request;
    this.response = response;
    this.emit('route');
};

fw_request.prototype.emit = function(event){
    this.fw.listeners[event].apply(this);
};






fw