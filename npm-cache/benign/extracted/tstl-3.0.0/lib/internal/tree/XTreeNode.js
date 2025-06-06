"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XTreeNode = void 0;
/**
 * Node of {@link XTree}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var XTreeNode = /** @class */ (function () {
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    function XTreeNode(value, color) {
        this.value = value;
        this.color = color;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
    Object.defineProperty(XTreeNode.prototype, "grand", {
        get: function () {
            return this.parent.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XTreeNode.prototype, "sibling", {
        get: function () {
            if (this === this.parent.left)
                return this.parent.right;
            else
                return this.parent.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XTreeNode.prototype, "uncle", {
        get: function () {
            return this.parent.sibling;
        },
        enumerable: false,
        configurable: true
    });
    return XTreeNode;
}());
exports.XTreeNode = XTreeNode;
//# sourceMappingURL=XTreeNode.js.map