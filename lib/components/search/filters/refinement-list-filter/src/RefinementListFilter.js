var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var _ = require("lodash");
var classNames = require('classnames');
require("../styles/index.scss");
var core_1 = require("../../../../../core");
var RefinementListFilter = (function (_super) {
    __extends(RefinementListFilter, _super);
    function RefinementListFilter() {
        _super.apply(this, arguments);
    }
    RefinementListFilter.prototype.shouldCreateNewSearcher = function () {
        return true;
    };
    RefinementListFilter.prototype.defineAccessor = function () {
        return new core_1.FacetAccessor(this.props.field, { id: this.props.id, operator: this.props.operator, title: this.props.title });
    };
    RefinementListFilter.prototype.addFilter = function (option) {
        this.accessor.state = this.accessor.state.toggle(option.key);
        this.searchkit.performSearch();
    };
    RefinementListFilter.prototype.renderOption = function (option) {
        var checkedClassName = classNames({
            "refinement-option__checkbox": true,
            "refinement-option__checkbox--checked": this.accessor.state.contains(option.key)
        });
        var optionClassName = classNames({
            "refinement-list-filter__item": true,
            "refinement-option": true,
            "refinement-option--checked": this.accessor.state.contains(option.key)
        });
        return (React.createElement(core_1.FastClick, {"handler": this.addFilter.bind(this, option), "key": option.key}, React.createElement("div", {"className": optionClassName}, React.createElement("div", {"className": checkedClassName}), React.createElement("div", {"className": "refinement-option__text"}, this.translate(option.key)), React.createElement("div", {"className": "refinement-option__count"}, option.doc_count))));
    };
    RefinementListFilter.prototype.hasOptions = function () {
        return this.accessor.getBuckets().length != 0;
    };
    RefinementListFilter.prototype.render = function () {
        var className = classNames((_a = {
                "refinement-list-filter": true,
                "refinement-list-filter--disabled": !this.hasOptions()
            },
            _a["filter--" + this.props.id] = true,
            _a
        ));
        return (React.createElement("div", {"className": className}, React.createElement("div", {"className": "refinement-list-filter__header"}, this.props.title), React.createElement("div", {"className": "refinement-list-filter__options"}, _.map(this.accessor.getBuckets(), this.renderOption.bind(this)))));
        var _a;
    };
    return RefinementListFilter;
})(core_1.SearchkitComponent);
exports.RefinementListFilter = RefinementListFilter;
//# sourceMappingURL=RefinementListFilter.js.map