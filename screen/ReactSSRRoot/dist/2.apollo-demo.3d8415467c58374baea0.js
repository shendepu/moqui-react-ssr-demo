webpackJsonp_name_([2],{

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(424);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(276);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\nquery {\n  mantle {\n    parties (pagination: { pageSize: 2 }) {\n      edges {\n        node {\n          partyId\n          partyTypeEnumId\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n}\n'], ['\nquery {\n  mantle {\n    parties (pagination: { pageSize: 2 }) {\n      edges {\n        node {\n          partyId\n          partyTypeEnumId\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n}\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(132);

var _graphqlTag = __webpack_require__(177);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactRouterAddonsRoutes = __webpack_require__(275);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApolloDemo = function (_Component) {
  (0, _inherits3.default)(ApolloDemo, _Component);

  function ApolloDemo() {
    (0, _classCallCheck3.default)(this, ApolloDemo);
    return (0, _possibleConstructorReturn3.default)(this, (ApolloDemo.__proto__ || (0, _getPrototypeOf2.default)(ApolloDemo)).apply(this, arguments));
  }

  (0, _createClass3.default)(ApolloDemo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          mantle = _props.mantle,
          routes = _props.routes,
          pattern = _props.pattern;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          (0, _stringify2.default)(mantle)
        ),
        _react2.default.createElement(
          'div',
          null,
          routes.map(function (route, i) {
            return _react2.default.createElement(_reactRouterAddonsRoutes.MatchWithRoutes, (0, _extends3.default)({ key: i }, route, { parentPattern: pattern }));
          })
        )
      );
    }
  }]);
  return ApolloDemo;
}(_react.Component);

ApolloDemo.propTypes = {
  loading: _react.PropTypes.bool,
  routes: _react.PropTypes.array,
  pattern: _react.PropTypes.string,
  mantle: _react.PropTypes.object
};

var demoQuery = (0, _graphqlTag2.default)(_templateObject);

var ApolloDemoWithData = (0, _reactApollo.graphql)(demoQuery, {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        _ref$data = _ref.data,
        loading = _ref$data.loading,
        mantle = _ref$data.mantle;

    return {
      loading: loading,
      mantle: mantle
    };
  }
})(ApolloDemo);

exports.default = ApolloDemoWithData;

/***/ }

});
//# sourceMappingURL=2.apollo-demo.3d8415467c58374baea0.js.map