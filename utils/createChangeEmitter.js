//extends an object with ability to emit changes and add/remove change listeners
var createChangeEmitter = function (baseObj) {
    baseObj = baseObj || {};

    var listeners = [];

    baseObj.emitChange = function() {
        for (var i = 0; i < listeners.length; i++)
            listeners[i].apply(this);
    };
    baseObj.addChangeListener = function(listenerCb) {
        if(listeners.indexOf(listenerCb) === -1)
            listeners.push(listenerCb);
    };
    baseObj.removeChangeListener = function(listenerCb) {
        var i = listeners.indexOf(listenerCb);
        if(i !== -1)
            listeners.splice(i, 1);
    };
    return baseObj;
};

module.exports = createChangeEmitter;