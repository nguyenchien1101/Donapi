"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeSet = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
var UniqueTreeSet_1 = require("../internal/container/associative/UniqueTreeSet");
var ITreeContainer_1 = require("../internal/container/associative/ITreeContainer");
var SetElementList_1 = require("../internal/container/associative/SetElementList");
var UniqueSetTree_1 = require("../internal/tree/UniqueSetTree");
/**
 * Unique-key Set based on Tree.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var TreeSet = /** @class */ (function (_super) {
    __extends(TreeSet, _super);
    function TreeSet() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, function (thisArg) { return new SetElementList_1.SetElementList(thisArg); }) || this;
        ITreeContainer_1.ITreeContainer.construct.apply(ITreeContainer_1.ITreeContainer, __spreadArray([_this,
            TreeSet,
            function (comp) {
                _this.tree_ = new UniqueSetTree_1.UniqueSetTree(_this, comp);
            }], __read(args), false));
        return _this;
    }
    /**
     * @inheritDoc
     */
    TreeSet.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.tree_.clear();
    };
    /**
     * @inheritDoc
     */
    TreeSet.prototype.swap = function (obj) {
        var _a, _b;
        // SWAP CONTENTS
        _a = __read([obj.data_, this.data_], 2), this.data_ = _a[0], obj.data_ = _a[1];
        SetElementList_1.SetElementList._Swap_associative(this.data_, obj.data_);
        // SWAP RB-TREE
        UniqueSetTree_1.UniqueSetTree._Swap_source(this.tree_, obj.tree_);
        _b = __read([obj.tree_, this.tree_], 2), this.tree_ = _b[0], obj.tree_ = _b[1];
    };
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    TreeSet.prototype.key_comp = function () {
        return this.tree_.key_comp();
    };
    /**
     * @inheritDoc
     */
    TreeSet.prototype.lower_bound = function (key) {
        return this.tree_.lower_bound(key);
    };
    /**
     * @inheritDoc
     */
    TreeSet.prototype.upper_bound = function (key) {
        return this.tree_.upper_bound(key);
    };
    /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
    TreeSet.prototype._Handle_insert = function (first, last) {
        for (; !first.equals(last); first = first.next())
            this.tree_.insert(first);
    };
    TreeSet.prototype._Handle_erase = function (first, last) {
        for (; !first.equals(last); first = first.next())
            this.tree_.erase(first);
    };
    return TreeSet;
}(UniqueTreeSet_1.UniqueTreeSet));
exports.TreeSet = TreeSet;
/**
 *
 */
(function (TreeSet) {
    // BODY
    TreeSet.Iterator = SetElementList_1.SetElementList.Iterator;
    TreeSet.ReverseIterator = SetElementList_1.SetElementList.ReverseIterator;
})(TreeSet || (exports.TreeSet = TreeSet = {}));
//# sourceMappingURL=TreeSet.js.map