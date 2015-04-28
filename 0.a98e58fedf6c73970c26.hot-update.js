webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Dispatcher = __webpack_require__(6);
	var Constants = __webpack_require__(7);
	var Events = __webpack_require__(29);
	var ClickStore = (function (_super) {
	    __extends(ClickStore, _super);
	    function ClickStore() {
	        _super.call(this);
	        this.dispatcher = Dispatcher;
	        this.actionTypes = Constants.actionTypes();
	        this.CHANGE_EVENT = 'change';
	        this.click = 0;
	        this.dispatcher.register(this.dispatchToken.bind(this));
	    }
	    ClickStore.prototype.addChangeListener = function (callback) {
	        this.on(this.CHANGE_EVENT, callback);
	    };
	    ClickStore.prototype.removeChangeListener = function (callback) {
	        this.removeListener(this.CHANGE_EVENT, callback);
	    };
	    ClickStore.prototype.getClicks = function () {
	        return this.click;
	    };
	    ClickStore.prototype.addClick = function () {
	        this.click++;
	    };
	    ClickStore.prototype.emitChange = function () {
	        this.emit(this.CHANGE_EVENT);
	    };
	    ClickStore.prototype.dispatchToken = function (payLoad) {
	        var action = payLoad.action;
	        switch (action.type) {
	            case this.actionTypes.CLICK:
	                this.addClick();
	                this.emitChange();
	                break;
	            default:
	        }
	    };
	    return ClickStore;
	})(Events.EventEmitter);
	module.exports = ClickStore;


/***/ }

})