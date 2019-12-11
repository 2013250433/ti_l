class Node(object):

    def __init__(self, data):
        self.data = data
        self.nextNode = Node
    
class LinkedList(object):

    def __init__(self):
        self.head = None
        self.size = 0

    # O(1)
    def insertStart(self, data):
        self.size = self.size + 1
        newNode = Node(data)

        if not self.head:
            self.head = newNode
        else:
            newNode.nextNode = self.head
            self.head = newNode

    # O(1)
    def size(self):
        return self.size
    
    # O(N)
    def size2(self):
        actualNode = self.head
        size = 0

        while actualNode is not None
            size+=1
            actualNode = actualNode.nextNode
