class BST_Node{
    constructor(key){
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }
}

class BST{
    constructor(NodeClass = BST_Node) {
        this.root = undefined;
        this.NodeClass = NodeClass;
        this.temp = "";
    }
    _add(root, key, ...args){
        if(root === undefined){
            root = new this.NodeClass(key, ...args);
            return root
        }else if(root.key > key){
            root.left = this._add(root.left, key, ...args);
        }else if(root.key < key){
            root.right = this._add(root.right, key, ...args);
        }
        return root
    }
    add(key, ...args){
        this.root = this._add(this.root, key, ...args);
    }
    _find(key, root){
        if (root === undefined)
            return root
        else{
            if(root.key === key){
                return root
            }
            else if(root.key > key)
                root = this._find(key ,root.left)
            else if(root.key < key)
                root = this._find(key ,root.right)
        return root
    }}
    find(key){
        return this._find(key, this.root);
    }
    #printPostorder(root, index) {
        if (root === undefined)
            return;
        this.#printPostorder(root.left, index);
        this.#printPostorder(root.right, index);
        this.temp = this.temp + `${root[index]}, `
    }
    postorder(index){
        this.temp = ""
        this.#printPostorder(this.root, index);
        const temp =  this.temp
        this.temp = ""
        return temp
    }
    #printInorder(root, index) {
        if (root === undefined)
            return;
        this.#printInorder(root.left, index);
        this.temp = this.temp + `${root[index]}, `
        this.#printInorder(root.right, index);
    }
    inorder(index= "key"){
        this.temp = ""
        this.#printInorder(this.root, index);
        const temp =  this.temp
        this.temp = ""
        return temp
    }
    #printPreorder(root, index) {
        if (root === undefined)
            return;
        this.temp = this.temp + `${root[index]}, `
        this.#printPreorder(root.left, index);
        this.#printPreorder(root.right, index);
    }
    preorder(index){
        this.temp = ""
        this.#printPreorder(this.root, index);
        const temp =  this.temp
        this.temp = ""
        return temp
    }
}


// test

class BSTCostumeNode extends BST_Node{
    constructor(key, value) {
        super(key);
        this.value = value
    }
}
const test = new BST(BSTCostumeNode);
test.add(15, 'ali');
test.add(7, 'reza');
test.add(25, 'nima');
test.add(29, 'hamid');
test.add(26, 'alireza');
test.add(24, 'ahmad');
test.add(10, 'donya');
test.add(4, 'sohrab');
console.log(test.find(29, "key")?.value);
