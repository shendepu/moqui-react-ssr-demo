webpackJsonp_name_([1],{

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.doubleAsync = exports.COUNTER_INCREMENT = undefined;

var _defineProperty2 = __webpack_require__(1066);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = __webpack_require__(94);

var _promise2 = _interopRequireDefault(_promise);

exports.increment = increment;
exports.default = counterReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Constants
// ------------------------------------
var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
function increment() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

var doubleAsync = exports.doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new _promise2.default(function (resolve) {
      setTimeout(function () {
        dispatch(increment(getState().counter));
        resolve();
      }, 200);
    });
  };
};

var actions = exports.actions = {
  increment: increment,
  doubleAsync: doubleAsync
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = (0, _defineProperty3.default)({}, COUNTER_INCREMENT, function (state, action) {
  return state + action.payload;
});

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/***/ },

/***/ 1046:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(68);

var _counter = __webpack_require__(1044);

var _Counter = __webpack_require__(1059);

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

var mapDispatchToProps = {
    increment: function increment() {
        return (0, _counter.increment)(1);
    },
    doubleAsync: _counter.doubleAsync
};

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

var mapStateToProps = function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

/***/ },

/***/ 1059:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(94);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(274);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(173);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(14);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);
    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { margin: '0 auto' } },
        _react2.default.createElement(
          'h2',
          null,
          'Counter: ',
          this.props.counter
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this.props.increment },
          'Increment'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this.props.doubleAsync },
          'Double (Async)'
        )
      );
    }
  }], [{
    key: 'loadData',
    value: function loadData(store, params) {
      //     return fetch('http://httpbin.org/ip')
      //       .then(response => {
      //         store.dispatch({
      //           type    : 'COUNTER_INCREMENT',
      //           payload : 5
      //         })
      //       })
      return new _promise2.default(function (resolve) {
        store.dispatch({
          type: 'COUNTER_INCREMENT',
          payload: 5
        });
        resolve('aa');
      });
    }
  }]);
  return Counter;
}(_react2.default.Component);

Counter.propTypes = {
  counter: _react2.default.PropTypes.number.isRequired,
  doubleAsync: _react2.default.PropTypes.func.isRequired,
  increment: _react2.default.PropTypes.func.isRequired
};

exports.default = Counter;

/***/ },

/***/ 1066:
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(427);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }

});
//# sourceMappingURL=1.counter.3d8415467c58374baea0.js.map