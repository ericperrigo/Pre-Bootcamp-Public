// BST:Add 

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        }
    }
    class BST {
        constructor() {
            this.root = null;
        }
        
        add(val) {
            this.root = this.add1(this.root, val);
        }

        add1(root, val) {
            if (root == null) {
                return new BTNode(val);
            }
            if (val < root.val) {
                root.left = this.add1(root.left, val);
            }
            else if (val > root.val){
                root.right = this.add1(root.right, val);
            }
            return root;
        }
    }
// BST: Contains

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        }
    }
    class BST {
        constructor() {
            this.root = null;
        }
        
        add(val) {
            this.root = this.add1(this.root, val);
        }

        add1(root, val) {
            if (root == null) {
                return new BTNode(val);
            }
            if (val < root.val) {
                root.left = this.add1(root.left, val);
            }
            else if (val > root.val){
                root.right = this.add1(root.right, val);
            }
            return root;
        }

        contains(val) {
            return this.contains1(this.root, val);
        }

        contains1(root, val) {
            if (root == null) {
                return false;
            }
            if (val == root.val) {
                return true;
            }
            else if (val < root.val) {
                return this.contains1(root.left, val)
            }
            else (val > root.val) {
                return this.contains1(root.right, val)
            }
        }
    }

// BST: Min

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        }
    }
    class BST {
        constructor() {
            this.root = null;
        }
        
        add(val) {
            this.root = this.add1(this.root, val);
        }

        add1(root, val) {
            if (root == null) {
                return new BTNode(val);
            }
            if (val < root.val) {
                root.left = this.add1(root.left, val);
            }
            else if (val > root.val){
                root.right = this.add1(root.right, val);
            }
            return root;
        }

        min() {
            return this.min1(this.root),
        }

        min1(node) {
            if (node == null) {
                return null;
            }
            while (node.left != null) {
                node = node.left;
            }
            return node.val;
        }
    }

// BST:Max

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        }
    }
    class BST {
        constructor() {
            this.root = null;
        }
        
        add(val) {
            this.root = this.add1(this.root, val);
        }

        add1(root, val) {
            if (root == null) {
                return new BTNode(val);
            }
            if (val < root.val) {
                root.left = this.add1(root.left, val);
            }
            else if (val > root.val){
                root.right = this.add1(root.right, val);
            }
            return root;
        }

        max() {
            return this.max1(this.root),
        }

        max1(node) {
            if (node == null) {
                return null;
            }
            while (node.right != null) {
                node = node.right;
            }
            return node.val;
        }
    }