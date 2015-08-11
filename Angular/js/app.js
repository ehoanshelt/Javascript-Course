(function(){
    var app = angular.module("store", []);
    app.controller('StoreController', function(){
        this.products = gems;
        this.owners = owners;
    });
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.controller('GalleryController', function(){
        this.current = 0;
        
        this.setCurrent = function(current){
            this.current = current || 0;
        };
    });
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is the product description',
            canPurchase: true,
            images: [
                  "assets/images/gem-02.gif"
                ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'This is the product description',
            canPurchase: false,
            images: [
                "assets/images/gem-01.gif"

                ]
        }
    ];
    
    var owners = [
        {
            name: 'Eric Hoanshelt',
            position: 'CEO'
        },
        {
            name: 'Julia Hoanshelt',
            position: 'CFO'
        }
    ];
})();