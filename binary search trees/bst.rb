class Node

  attr_reader :data
  attr_accessor :left, :right
  def initialize(data)
    @data = data
    @right = nil
    @left = nil
  end
end

class BST
  attr_accessor :root
  def initialize
    @root = nil
  end

  def insert(data)
    new_node = Node.new(data)
    @root === nil ? @root = new_node : self.insert_node(@root, new_node)
  end

  def insert_node(node, new_node)

    if new_node.data < node.data
      node.left === nil ? node.left = new_node :  self.insert_node(node.left, new_node)
    else
      node.right === nil ? node.right = new_node :  self.insert_node(node.right, new_node)
    end
  end

  def search(node, data)
    if (node === nil)
      nil
    elsif data < node.data
      return self.search(node.left, data)
    elsif data > node.data
      return self.search(node.right, data)
    else
      return node
    end
  end
end



