// Tree is basically a collection of nodes with each node having a value and also a list of references to other nodes.All trees have a root node.There are different types of tree data structures including binary tree which in itself has a list of variants such as the binary search tree, Binary tries, hash trees etc.

// key in each node must be greater than or equal to any key stored in the left sub - tree, and less than or equal to any key stored in the right 

// Search Operation - O(n)
// Insertion Operation - O(1)
// Deletion Operation - O(n)

// use
// Unix kernels for managing a set of virtual memory areas
// implement multilevel indexing in DATABASE.


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    contains(value) {
        let current = this.root

        while (current) {
            if (value > current.value) {
                current = current.right;
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                return true
            }
        }
    }

    add(value) {
        let node = {
            value,
            left: null,
            right: null,
        }

        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (value > current.value) {
                if (!current.right) {
                    current.right = node
                    break
                }
                current = current.right
            }
            else if (value < current.value) {
                if (!current.left) {
                    current.left = node
                    break
                }
                current = current.left
            }
            else {
                break
            }
        }

    }


}


const newBT = new BinarySearchTree()
const data = [10, 12, 5, 4, 20, 8, 7, 15, 13]
data.forEach(item => newBT.add(item))
console.log(JSON.stringify(newBT))


// {
//     "root": {
//         "value": 10,
//             "left": {
//             "value": 5,
//                 "left": {
//                 "value": 4,
//                     "left": null,
//                         "right": null
//             },
//             "right": {
//                 "value": 8,
//                     "left": {
//                     "value": 7,
//                         "left": null,
//                             "right": null
//                 },
//                 "right": null
//             }
//         },
//         "right": {
//             "value": 12,
//                 "left": null,
//                     "right": {
//                 "value": 20,
//                     "left": {
//                     "value": 15,
//                         "left": {
//                         "value": 13,
//                             "left": null,
//                                 "right": null
//                     },
//                     "right": null
//                 },
//                 "right": null
//             }
//         }
//     }
// }