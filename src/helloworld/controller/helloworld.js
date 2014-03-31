var controller = require('application').controller;

var helloworld = function(){ controller.apply(this,arguments); };
    
helloworld.prototype.index = function( next ){
    
    var layout = this.app.getTpl('helloworld'),
        child = this.app.getTpl('mynameis');

    child.datas = {firstname:'Bob',lastname:'Morane'};
    layout.addChild('mynameis',child);
    
    this.context.setResponse( layout );
    next();
};