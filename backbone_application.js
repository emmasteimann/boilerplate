//Anonymous Function Closure
(function($){

    // START MODEL //
    
    var ProductsModel = Backbone.Model.extend({
		defaults : {
			categories: [],
			error : {}
		},
		validate: function(attrs) {
		},
		initialize : function(){
			
		}
		
	});
    
    // END MODEL //
    
	// START COLLECTION //
	
    var ProductsCollection = Backbone.Collection.extend({
        model: ProductsModel
    });
	
    // END COLLECTION //
	
	
    // START ROUTER //
    
    var ProductsRouter = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        initialize: function(){
			var self = this;
			
        },
		index : function(){
			var productsview = new ProductsView()
		}
    });
    
    // END ROUTER //
    
    // START VIEW //
    
    var ProductsView = Backbone.View.extend({
    	el: $('body, html'),
		
        events: {
           // "submit form": "save"
        },
        
        initialize: function(){
			this.collection = new ProductsCollection();
			var starter = this.create()
        },
		
        create : function(){
			//New model instance add to collection
			item = new ProductsModel()
		    this.collection.add(item)
		},
		
        save: function(){
        
        },
        
        render: function(){
        	//Start Spitting out HTML
        }
    });
    
    // END VIEW //
    
	// Launch App by creating an instance of ProductsRouter
    var App = {
        Views: {},
        Controllers: {},
        init: function(){
            new ProductsRouter();
            Backbone.history.start();
        }
    };
    
    $(function(){
        App.init();
    });
    
})(jQuery);
