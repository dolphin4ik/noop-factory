/*
noop-factory
*/

(function (root, factory, name){

    if (typeof define === 'function' && define.amd){

        define([], factory);

    }else if(typeof module === 'object' && module.exports){

        module.exports = factory();

    }else{

        root[name] = factory();

    }

})(this, function (){

    return //Your code, function, object, etc..

}, name);