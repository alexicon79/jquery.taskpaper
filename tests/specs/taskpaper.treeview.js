describe('I need to be able to populate the taskpaper treeview', {
  
  before_each: function() {
    item = new taskpaperItem();   
    root = $('<ul id="todo">').insertAfter('#main')  	
	},
	
	after_each: function(){
    $('#todo').remove()
	},
	
	'should load up the project in the tree': function(){
    item.text = 'Project:'
    item.type = 'project'
    
    parent = $().taskpaper.treeview.createNode( { 
              item: item, 
              appendTo: root 
              });
              
    value_of($('#todo').html()).should_be('<li><span class="project">Project:</span><ul></ul></li>')
	},

	'should load up the task in the tree': function(){
    item.text = '- task'
    item.type = 'task'
    
    parent = $().taskpaper.treeview.createNode( { 
              item: item, 
              appendTo: root 
              });
              
    value_of($('#todo').html()).should_be('<li><span class="task">- task</span></li>')
	},

	'should load up the task in the tree': function(){
    item.text = 'a note'
    item.type = 'note'
    
    parent = $().taskpaper.treeview.createNode( { 
              item: item, 
              appendTo: root 
              });
              
    value_of($('#todo').html()).should_be('<li><span class="note">a note</span></li>')
	},
	
	'should parse a @done tag and format with a strikethrough': function(){
    item.text = '- task @done'
    item.type = 'task'

    parent = $().taskpaper.treeview.createNode( { 
              item: item, 
              appendTo: root 
              });
              
    value_of($('#todo').html()).should_be('<li><span class="task">- <del>task</del> <a class="done">@done</a></span></li>')	  
	},
	
	'should parse a tag in an item and add a tag handler': function(){
    item.text = '- task @email'
    item.type = 'task'
    parent = $().taskpaper.treeview.createNode( { 
               item: item, 
               appendTo: root 
               });

     value_of($('#todo').html()).should_be('<li><span class="task">- task <a class="email">@email</a></span></li>')	    
	},

})