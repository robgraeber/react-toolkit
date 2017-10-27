React-Toolkit
=================
React toolkit for commonly used ui, mixins, and utils. 

##Install

```
npm install react-toolkit
```

##How to use

##react-toolkit/utils/createManager:
* Creates a data store object with getter/setters and change emitters:
```
var ApiHelper = require('../utils/ApiHelper'),
    createManager = require('react-toolkit/utils/createManager');

var Manager = module.exports = createManager({
    initialize: function() {
        ApiHelper.getFoodEvents('SF').then(function (foodEvents) {
            this.set('foodEvents', foodEvents);
        }.bind(this));
    }
});

```

##react-toolkit/mixin/ChangeListener:
* Mixin that calls _onChange() when target changeEmitter/manager changes:
```
var React = require('react'),
    AppManager = require('../managers/AppManager'),
    ChangeListener = require('react-toolkit/mixins/ChangeListener');

var Component = module.exports = React.createClass({
    mixins: [ChangeListener],
    statics: {
        changeEmitters: [AppManager]
    },
    getInitialState: function() {
        return { foodEvents: AppManager.get('foodEvents') || [] };
    },
    _onChange: function() {
        this.setState({ foodEvents: AppManager.get('foodEvents') || [] });
    },
    render: function() {  
        return (
            <div>This is the count: {this.state.foodEvents.length}</div>
        );
    }
});
```

Please fork and improve :)
