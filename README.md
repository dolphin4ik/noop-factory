# noop-factory

only use its as a small snippet to create your own code, plugins, libraries.. using MODULE system

```javascript

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

//name - your module name
```

Enjoy ;)