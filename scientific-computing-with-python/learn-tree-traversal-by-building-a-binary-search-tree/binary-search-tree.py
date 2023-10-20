class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        self.root = self._insert(self.root, key)

    def _insert(self, root, key):
        if root is None:
            return TreeNode(key)
        if key < root.key:
            root.left = self._insert(root.left, key)
        else:
            root.right = self._insert(root.right, key)
        return root

    def search(self, key):
        return self._search(self.root, key)

    def _search(self, root, key):
        if root is None or root.key == key:
            return root
        if key < root.key:
            return self._search(root.left, key)
        return self._search(root.right, key)

    def delete(self, key):
        self.root = self._delete(self.root, key)

    def _delete(self, root, key):
        if root is None:
            return root
        if key < root.key:
            root.left = self._delete(root.left, key)
        elif key > root.key:
            root.right = self._delete(root.right, key)
        else:
            # Node with one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            # Node with two children, get the in-order successor (smallest in the right subtree)
            root.key = self._min_value_node(root.right).key
            root.right = self._delete(root.right, root.key)
        return root

    def _min_value_node(self, node):
        while node.left is not None:
            node = node.left
        return node

    def inorder_traversal(self):
        result = []
        self._inorder_traversal(self.root, result)
        return result

    def _inorder_traversal(self, root, result):
        if root:
            self._inorder_traversal(root.left, result)
            result.append(root.key)
            self._inorder_traversal(root.right, result)

# Example usage:
bst = BinarySearchTree()
nodes = [50, 30, 20, 40, 70, 60, 80]
for node in nodes:
    bst.insert(node)

print("Inorder traversal:", bst.inorder_traversal())  # Should print [20, 30, 40, 50, 60, 70, 80]

bst.delete(20)
print("Inorder traversal after deleting 20:", bst.inorder_traversal())  # Should print [30, 40, 50, 60, 70, 80]
