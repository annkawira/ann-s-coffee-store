function addDragAndDropHandlers(){
    let coffeeImages=document.getElementsByClassName("productarticlewide");

    let shoppingCartDropZone=document.getElementById("shoppingcart");

    let shoppingCart=document.querySelectorAll("#shoppingcart ul")[0];

    let cart=(function(){
        this.coffees=new Array();
    });

    let coffee=(function(id,price){
        this.coffeeId=id;
        this.price=price;
    });

    let currentCart=null;
    for(let i=0;i<coffeeImages.length;i++){
        coffeeImages[i].addEventListener("dragstart",function(){
            ev.dataTransfer.effectAllowed='copy';
            ev.dataTransfer.setData("Text",this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropDoze.addEventListener("dragover",function(ev){
        if(ev.preventDefault)
          ev.preventDefault();
          ev.dataTransfer.dropEffect="copy";
          return false;
  },false);

  shoppingCartDropZone.addEventListener("drop",function(ev){
      if(ev.stopPropagation)
         ev.stopPropagation();

         let coffeeId=ev.dataTransfer.getData("Text");
         let element=document.getElementById(coffeeId);

         addCoffeeToShoppingCart(element,coffeeId);
          ev.stopPropagation();
          return false;
},false);

function addCoffeeToShoppingCart(item,id){
    let html=id+""+item.getAttribute("data-price");

    let liElement =document.createElement('li');
    liElement.innerHtml=html;
    shopping.appendchild(liElement);
  }
}