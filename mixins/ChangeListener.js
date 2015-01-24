var DEFAULT_CHANGE_HANDLER = '_onChange',
    ChangeListener;

ChangeListener = {
    componentDidMount: function() {
        var changeEmitters = this.constructor.changeEmitters; // Static property on component
        if (changeEmitters) {
            for (var i = 0; i < changeEmitters.length; i++) {
                changeEmitters[i].addChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    },
    componentWillUnmount: function() {
        var changeEmitters = this.constructor.changeEmitters; // Static property on component

        if (changeEmitters) {
            for (var i = 0; i < changeEmitters.length; i++) {
                changeEmitters[i].removeChangeListener(this[DEFAULT_CHANGE_HANDLER]);
            }
        }
    }
};

module.exports = ChangeListener;