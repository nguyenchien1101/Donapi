"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XTree = void 0;
//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
var XTreeNode_1 = require("./XTreeNode");
/**
 * Red-Black Tree
 *
 * @reference https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree
 * @inventor Rudolf Bayer
 * @author Jeongho Nam - https://github.com/samchon
 */
var XTree = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
    function XTree(comp) {
        this.root_ = null;
        this.comp_ = comp;
        this.equal_ = function (x, y) {
            return !comp(x, y) && !comp(y, x);
        };
    }
    XTree.prototype.clear = function () {
        this.root_ = null;
    };
    /* =========================================================
        ACCESSORS
            - GETTERS
            - COMPARISON
    ============================================================
        GETTERS
    --------------------------------------------------------- */
    XTree.prototype.root = function () {
        return this.root_;
    };
    XTree.prototype.get = function (val) {
        var ret = this.nearest(val);
        if (ret === null || !this.equal_(val, ret.value))
            return null;
        else
            return ret;
    };
    XTree.prototype.nearest = function (val) {
        // NEED NOT TO ITERATE
        if (this.root_ === null)
            return null;
        //----
        // ITERATE
        //----
        var ret = this.root_;
        while (true) {
            // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
            var my_node = null;
            // COMPARE
            if (this.comp_(val, ret.value))
                my_node = ret.left;
            else if (this.comp_(ret.value, val))
                my_node = ret.right;
            else
                return ret; // MATCHED VALUE
            // FINAL BRANCH? OR KEEP GOING
            if (my_node !== null)
                ret = my_node;
            else
                break;
        }
        return ret; // DIFFERENT NODE
    };
    XTree.prototype._Fetch_maximum = function (node) {
        while (node.right !== null)
            node = node.right;
        return node;
    };
    /* =========================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
            - COLOR
            - ROTATION
    ============================================================
        INSERT
    --------------------------------------------------------- */
    XTree.prototype.insert = function (val) {
        var parent = this.nearest(val);
        var node = new XTreeNode_1.XTreeNode(val, 1 /* Color.RED */);
        if (parent === null)
            this.root_ = node;
        else {
            node.parent = parent;
            if (this.comp_(node.value, parent.value))
                parent.left = node;
            else
                parent.right = node;
        }
        this._Insert_case1(node);
    };
    XTree.prototype._Insert_case1 = function (n) {
        if (n.parent === null)
            n.color = 0 /* Color.BLACK */;
        else
            this._Insert_case2(n);
    };
    XTree.prototype._Insert_case2 = function (n) {
        if (this._Fetch_color(n.parent) === 0 /* Color.BLACK */)
            return;
        else
            this._Insert_case3(n);
    };
    XTree.prototype._Insert_case3 = function (n) {
        if (this._Fetch_color(n.uncle) === 1 /* Color.RED */) {
            n.parent.color = 0 /* Color.BLACK */;
            n.uncle.color = 0 /* Color.BLACK */;
            n.grand.color = 1 /* Color.RED */;
            this._Insert_case1(n.grand);
        }
        else
            this._Insert_case4(n);
    };
    XTree.prototype._Insert_case4 = function (n) {
        if (n === n.parent.right && n.parent === n.grand.left) {
            this._Rotate_left(n.parent);
            n = n.left;
        }
        else if (n === n.parent.left && n.parent === n.grand.right) {
            this._Rotate_right(n.parent);
            n = n.right;
        }
        this._Insert_case5(n);
    };
    XTree.prototype._Insert_case5 = function (n) {
        n.parent.color = 0 /* Color.BLACK */;
        n.grand.color = 1 /* Color.RED */;
        if (n === n.parent.left && n.parent === n.grand.left)
            this._Rotate_right(n.grand);
        else
            this._Rotate_left(n.grand);
    };
    /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
    XTree.prototype.erase = function (val) {
        var node = this.get(val);
        if (node === null)
            return; // UNABLE TO FIND THE MATCHED NODE
        if (node.left !== null && node.right !== null) {
            var pred = this._Fetch_maximum(node.left);
            node.value = pred.value;
            node = pred;
        }
        var child = node.right === null ? node.left : node.right;
        if (this._Fetch_color(node) === 0 /* Color.BLACK */) {
            node.color = this._Fetch_color(child);
            this._Erase_case1(node);
        }
        this._Replace_node(node, child);
        if (this._Fetch_color(this.root_) === 1 /* Color.RED */)
            this.root_.color = 0 /* Color.BLACK */;
    };
    XTree.prototype._Erase_case1 = function (n) {
        if (n.parent === null)
            return;
        else
            this._Erase_case2(n);
    };
    XTree.prototype._Erase_case2 = function (n) {
        if (this._Fetch_color(n.sibling) === 1 /* Color.RED */) {
            n.parent.color = 1 /* Color.RED */;
            n.sibling.color = 0 /* Color.BLACK */;
            if (n === n.parent.left)
                this._Rotate_left(n.parent);
            else
                this._Rotate_right(n.parent);
        }
        this._Erase_case3(n);
    };
    XTree.prototype._Erase_case3 = function (n) {
        if (this._Fetch_color(n.parent) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling.left) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling.right) === 0 /* Color.BLACK */) {
            n.sibling.color = 1 /* Color.RED */;
            this._Erase_case1(n.parent);
        }
        else
            this._Erase_case4(n);
    };
    XTree.prototype._Erase_case4 = function (N) {
        if (this._Fetch_color(N.parent) === 1 /* Color.RED */ &&
            N.sibling !== null &&
            this._Fetch_color(N.sibling) === 0 /* Color.BLACK */ &&
            this._Fetch_color(N.sibling.left) === 0 /* Color.BLACK */ &&
            this._Fetch_color(N.sibling.right) === 0 /* Color.BLACK */) {
            N.sibling.color = 1 /* Color.RED */;
            N.parent.color = 0 /* Color.BLACK */;
        }
        else
            this._Erase_case5(N);
    };
    XTree.prototype._Erase_case5 = function (n) {
        if (n === n.parent.left &&
            n.sibling !== null &&
            this._Fetch_color(n.sibling) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling.left) === 1 /* Color.RED */ &&
            this._Fetch_color(n.sibling.right) === 0 /* Color.BLACK */) {
            n.sibling.color = 1 /* Color.RED */;
            n.sibling.left.color = 0 /* Color.BLACK */;
            this._Rotate_right(n.sibling);
        }
        else if (n === n.parent.right &&
            n.sibling !== null &&
            this._Fetch_color(n.sibling) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling.left) === 0 /* Color.BLACK */ &&
            this._Fetch_color(n.sibling.right) === 1 /* Color.RED */) {
            n.sibling.color = 1 /* Color.RED */;
            n.sibling.right.color = 0 /* Color.BLACK */;
            this._Rotate_left(n.sibling);
        }
        this._Erase_case6(n);
    };
    XTree.prototype._Erase_case6 = function (n) {
        n.sibling.color = this._Fetch_color(n.parent);
        n.parent.color = 0 /* Color.BLACK */;
        if (n === n.parent.left) {
            n.sibling.right.color = 0 /* Color.BLACK */;
            this._Rotate_left(n.parent);
        }
        else {
            n.sibling.left.color = 0 /* Color.BLACK */;
            this._Rotate_right(n.parent);
        }
    };
    /* ---------------------------------------------------------
        ROTATION
    --------------------------------------------------------- */
    XTree.prototype._Rotate_left = function (node) {
        var right = node.right;
        this._Replace_node(node, right);
        node.right = right.left;
        if (right.left !== null)
            right.left.parent = node;
        right.left = node;
        node.parent = right;
    };
    XTree.prototype._Rotate_right = function (node) {
        var left = node.left;
        this._Replace_node(node, left);
        node.left = left.right;
        if (left.right !== null)
            left.right.parent = node;
        left.right = node;
        node.parent = left;
    };
    XTree.prototype._Replace_node = function (oldNode, newNode) {
        if (oldNode.parent === null)
            this.root_ = newNode;
        else {
            if (oldNode === oldNode.parent.left)
                oldNode.parent.left = newNode;
            else
                oldNode.parent.right = newNode;
        }
        if (newNode !== null)
            newNode.parent = oldNode.parent;
    };
    /* ---------------------------------------------------------
        COLOR
    --------------------------------------------------------- */
    XTree.prototype._Fetch_color = function (node) {
        if (node === null)
            return 0 /* Color.BLACK */;
        else
            return node.color;
    };
    return XTree;
}());
exports.XTree = XTree;
//# sourceMappingURL=XTree.js.map