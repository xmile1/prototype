Depth First = O(n)


Breadth First = O(n^2)


# A function to do inorder tree traversal
def printInorder(root):

if root:

# First recur on left child
printInorder(root.left)

# then print the data of node
print(root.val),

# now recur on right child
printInorder(root.right)



# A function to do postorder tree traversal
def printPostorder(root):

if root:

# First recur on left child
printPostorder(root.left)

# the recur on right child
printPostorder(root.right)

# now print the data of node
print(root.val),


# A function to do postorder tree traversal
def printPreorder(root):

if root:

# First print the data of node
print(root.val),

# Then recur on left child
printPreorder(root.left)

# Finally recur on right child
printPreorder(root.right)