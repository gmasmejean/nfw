

var fw = function( config ){
    if( typeof(config)==='string' )
        config = require(config);
    
    fw.config=config||{};
    if( fw.config.routes )
        fw.load.routes( fw.config.routes );
    
    fw.emit('configurated');
};

// Setting routes config
fw.p.routes.literal={};
fw.p.routes.segment=[];

fw.load.routes = function(routes){
    for( var name in routes)
        fw.load.route[routes[name].type](routes[name],name);
};
// Build Literal Routes Array
fw.load.route.literal = function(conf,name){
    fw.p.routes.literal[conf.route] = {name:name,module:conf.module,action:conf.action}; };

// Build Segments Routes Array
// fw.p.routes.segment = [{name:'',rgx:RegExp,params:[],module:'',action:''},...];
fw.load.route.segment = function(conf,name){
    var rgxStr = conf.route;
    var params = conf.route.match( new RegExp('\\[:\\w*\\]','g') );
    var p, args=[];
    for( var i=0; i<params.length; i++){
        p = params[i].slice(2,-1);
        args.push(p);
        if( conf.constraints[p] )
            rgxStr.replace( params[i],'\('+conf.constraints[p]+'\)');
        else
            rgxStr.replace( params[i],'\(.*\)');
    }
    fw.p.routes.segment.push({rgx:new RegExp('\^'+rgxStr),name:name,
        params:args,module:conf.module,action:conf.action});
};

fw.route = function( route ){
    for( var i=0; i<fw.p.routeTypes.length; i++ )
        if(fw.route[fw.p.routeTypes[i]](route))
            return true;
};
fw.route.literal = function( route ){
    if( fw.p.routes.literal[route] ){
        // Route is matching.
        
        return true;
    }else
        return false;
};

fw.route.segment = function( route ){
    for( var i=0; i<fw.p.routes.segment.length; i++){
        var m = route.match( fw.p.routes.segment[i].rgx );
        if( m ){
            // Route is matching
         
            return true;
        }
    }
    return false;
};







fw.handleRequest = function( req, res ){
    
    
    
    
    
    
    
};





fw.loadConfiguration = function(){};




// -- Events listeners
// Once application configurated
fw.on('configurated',function(){},999);

// Once application request analysed
fw.on('route',function(){
    
},999);
// Called to send response.
fw.on('response',function(){
    fw.sendResponse();
},999);


fw.sendResponse = function(){
//    
};






// -- Events Management. /!\ Priority must be numeric.
fw.on = function(event,callback,priority){
    if( !fw.listeners[event] )
        fw.listeners[event] = {};
    fw.listeners[event][priority] = callback;
};

fw.emit =function(event){
    var fn = fw[event];
    var keys = Object.keys(fw.listeners[event]).sort();
    if(keys.length){
        for( var i=0; i<keys.length; i++)
            fn= (function(fn,key){
                return function(){ fw.listeners[event][key](fn);}; })(fn,keys[i]);
    }
    fn();
};



fw.route = function(){
    
    this.emit('control');
};
fw.control = function(){
    
    this.emit('render');
};
fw.render = function(){
    
};





var controller = function(){
    
};

controller.action = function(){
    // Besoin de récupérer la requete
    // 
    // Besoin de faire des requetes sur l'API.
    // Besoin de récupérer les templates
    
    
    
    
    
    
    // Besoin de mettre à jour la réponse
};




var viewObject = function( template,fw){
    this.fn = require(fw.config.templates[template]);
};
viewObject.prototype.childs={};
viewObject.protoype.addChild = function(viewObject, name){
    this.childs[name]=viewObject;
};

viewObject.prototype.render = function(){
    
};



template = function(){
    //return <div></div>;
    
    
};



/*
<div>
    <?js for(var i=0; i<tpl.array.length; i++): ?>
    <div><?js return tpl.array[i]; ?></div>
    <?js endfor; ?>
</div>




*/

var tpl = function(tpl){
    return '<div>'+ (function(tpl){
            var str='';
            for( var i=0; i<tpl.array.length; i++ )
                str += '<div>'+(function(tpl){ return tpl.array[i]; })()+'</div>';
            return str;
        })(tpl)+'</div>';
    
};



var tplfn = ;









