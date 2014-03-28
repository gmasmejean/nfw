var controller = require('controller');
    helloworld = function(){
        controller.apply(this,arguments);
    };
    
helloworld.prototype.index = function( next ){
    
    var layout = this.app.getTpl('helloworld');
    
    
    this.context.setResponse( layout );
    next();
};