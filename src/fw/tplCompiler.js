/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs = require('fs');

fwTplGenerator =  function( path, name ){
    
    fs.exists( path+'/'+name+'.tpl.js',function(exist){
        if(!exist){
            console.log( path+'/src/'+name+'.jhtml' );
            fs.exists( path+'/src/'+name+'.jhtml',function(exist){
                if( !exist )
                    throw new Error('Template source file does not exists');
                var src = fs.readFileSync( path+'/src/'+name+'.jhtml',{ encoding:'utf8'});
                console.log( src );
                var fn = jstplGenerator(src,name)
                fs.writeFileSync(path+'/'+name+'.tpl.js',fn,{encoding:'utf8'});
            });
        }
    });
};



jstplGenerator = function( src, name ){
    
    var jsTpl = '', 
        matches= [],
        startRgx = new RegExp('((if|for)\\(((?!\\)\\s*:).)*\\)\\s*:)','g'),
        elseRgx = new RegExp('else\\s*:','g'),
        elseifRgx = new RegExp('(else\\s*if\\s*\\(((?!\\)\\s*:).)*\\)\\s*:)','g'),
        endRgx = new RegExp('endfor;|endif;','g');
            
    src = src.replace(new RegExp('\n|\t|\r','g'),'').replace(new RegExp('>\\s*<','g'),'><');
    
    var srcArray = src.split(new RegExp('(<\\?js|\\?>)','g'));
    var isJs = false;    
    
    for( var i=0; i<srcArray.length; i++){
        if( srcArray[i] !== '<?js' && srcArray[i] !== '?>' && !isJs )
            jsTpl += 'htmlFW+=\''+srcArray[i].replace("'","\'")+'\';';
        if( isJs && srcArray[i] !== '<?js' && srcArray[i] !== '?>'){
            
            matches = srcArray[i].match(startRgx);
            if(matches)
                for( var j=0; j<matches.length; j++ )
                    srcArray[i] = srcArray[i].replace( matches[j], matches[j].slice(0,-1)+'{' );
            
            matches = srcArray[i].match(elseifRgx);
            if(matches)
                for( var j=0; j<matches.length; j++ )
                    srcArray[i] = srcArray[i].replace( matches[j], '}'+matches[j].slice(0,-1)+'{' );
            
            jsTpl += srcArray[i].replace('echo','htmlFW+=')
                                .replace(endRgx,'}')
                                .replace(elseRgx,'}else{');
        }
        if( srcArray[i] === '<?js' )
            isJs = true;
        else if( srcArray[i] === '?>')
            isJs = false;
    }
    return 'var '+name+'TPL = function(app){var htmlFW=\'\'; '+jsTpl+' return htmlFW; }';
};

fwTplGenerator('templates','test');