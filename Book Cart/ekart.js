let products =
[
    {   
        id: 1,
        title : "Geetanjali",
        author:  "Rabinder Nath Tagore",
        paperback: 367,
        edition:  "10th",
        price:     450,
        image: "geetanjali.jpg"
    },
    {   
        id: 2,
        title : "The Secret of The Old Clock",
        author:  "Carolyn Keene",
        paperback: 300,
        edition:  "4th",
        price:     430,
        image: "old clock.jpg"
    },
    {
        id: 3,
        title : "If I Stay",
        author:  "Gayle Forman",
        paperback: 360,
        edition:  "2nd",
        price:     450,
        image: "if i stay.jpg"
    },
    {
        id: 4,
        title : "Charlotte's Web",
        author:  "E.B. White",
        paperback: 200,
        edition:  "1st",
        price:     590,
        image: "charlotte web.jpg"
    },
    {
        id: 5,
        title : "Meiko and the 5th treasure",
        author:  "Eleanor Coerr",
        paperback: 423,
        edition:  "3rd",
        price:     400,
        image: "mieko.jpg"
    },
    {   
        id: 6,
        title : "Peter Pan",
        author:  "J.M Barrie",
        paperback: 350,
        edition:  "10th",
        price:     350,
        image: "peter pan.jpg"
    }

]


let count=0;
let cart = [];
function displayBooks(productsdata, who = "productwrapper")
{
    let books = "";
    productsdata.forEach(function(book, index){
        let {id, title, author,paperback, edition, price, image} = book;
     if(who=="productwrapper")
     {
        books+=`<div class="product">
        <div class="prodimg">
            <img src="images/${image}" alt="${image}" width="100%" />
        </div>
        <h3>${title}</h>
        <p>price: ${price}</p>
        <p>paperback: ${paperback}</p>
        <p>Edition: ${edition}</p>
        <p>Author: ${author}</p>
        <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
        </div>`

     }else if(who =="cart"){
        books+=`<div class="product">
        <div class="prodimg">
            <img src="images/${image}" alt="${image}" width="100%" />
        </div>
        <h3>${title}</h>
        <p>price: ${price}</p>
        <p>paperback: ${paperback}</p>
        <p>Edition: ${edition}</p>
        <p>Author: ${author}</p>
        <p>
            <button onclick="removeFromCart(${id})">remove from cart</button>
        </p>
        </div>`

     }
            });
    document.getElementById(who).innerHTML = books;

}

displayBooks(products);

function searchBooks(searchvalue){
    console.log(searchvalue)
    let searchdata = products.filter(function(product, index){
        let searchstring =
        product.title + " " + product.author;
        return searchstring.toUpperCase().indexOf(searchvalue.toUpperCase())!= -1;
    })
    displayBooks(searchdata)
}

function getProductById(product, id)
{
    return product.find(function(ele){
        return ele.id == id;
    });
}
let check;
function addToCart(id) {
    check = false;
    let item = getProductById(products, id);
    cart.forEach(function(element, id){
        if(element.id == item.id)
        {
            check = true;
        }
    });
   if(check == true){
       window.alert("Only one product per user\n Thankyou")
       return 0;
   }
   else
    cart.push(item);
    count+=1;
    console.log(cart)
    document.getElementById("count").innerText=count;
    displayBooks(cart, "cart")
}
//   if (flag == true) {
//       alert("Manners Maketh Man!\ndont add the same product twice");
//     return 0;
//   }
//   cart.push(item);
//   count+=1;
//   document.getElementById("count").innerText=count;
//    let type="cart";
//    let place="cartcard";
//     console.log(item)
//   displayBooks(cart, "cart");

// }


// function addToCart(index){
//     // console.log(products[index])
//          cart.push(products[index]);
//          console.log(cart);
//          displayBooks(cart, "cart")
//          countval++;
//          updateCount();
//  } 


function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayBooks(cart, "cart");
  }

function filter(event)
{
    event.preventDefault();
    let min = document.getElementById("minv").value;
    let max = document.getElementById("maxv").value;
    console.log(min)
    console.log(max)
    let res = products.filter((val) => val.price >= min && val.price <= max);
    displayBooks(res, "productwrapper");
}
let cartv;
function cartValue(sum){
    price = getProductById(products, price)
    sum = sum+price;
    console.log(sum)
}