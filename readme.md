#react-validate-mixin

[![NPM](https://nodei.co/npm/react-validate-mixin.png)](https://nodei.co/npm/react-validate-mixin/)

```
npm install react-validate-mixin
```

##Example

```js
var validate = require('react-validate-mixin');

var Compoent = React.createClass({
  mixins: [validate],
  render: function () {
    return (<div></div>);
  }
})
```

```
<Component
  required="true"
  maxCharacters="20"
  minCharacters="2"
  email="true"
  />
```

#License
MIT
