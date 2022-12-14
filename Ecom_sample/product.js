  var arr =[
       {name:"apple",category:"bulkfruits",price:100,kg:1,id:1},
       {name:"orange",category:"bulkfruits",price:80,kg:1,id:2},
       {name:"banana",category:"fruits",price:50,kg:1,id:3},
       {name:"grapes",category:"fruits",price:90,kg:1,id:4},
       {name:"tomato",category:"veg",price:40,kg:1,id:19},
       {name:"potato",category:"veg",price:30,kg:1,id:20},
       {name:"onion",category:"veg",price:50,kg:1,id:23},
       {name:"chicken",category:"nonveg",price:200,kg:1,id:10},
       {name:"fish",category:"nonveg",price:200,kg:1,id:11},
       {name:"gravy",category:"vegdiss",price:100,id:18},
       {name:"goat",category:"bulknonveg",price:200,kg:1,id:12},
       {name:"freshchick",category:"bulknonveg",price:200,kg:1,id:13},
       {name:"grillchicken",category:"combofood",price:100,id:16},
       {name:"chicken dall",category:"combofood",price:100,id:17},
       {name:"friedrice",category:"nonvegfood",price:100,id:14},
       {name:"chickenrice",category:"nonvegfood",price:100,id:15},
      ];
      //  {name:"bringal",category:"veg",price:40,kg:1,id:21},
      //  {name:"carrot",category:"veg",price:70,kg:1,id:22},,
        //   {name:"binapple",category:"fruits",price:60,kg:1,id:5},
      //   {name:"coconut",category:"fruits",price:20,kg:1,id:6},
      //   {name:"mango",category:"fruits",price:60,kg:1,id:7},
      //  {name:"lychee",category:"fruits",price:50,kg:1,id:8},
      //  {name:"berries",category:"fruits",price:150,kg:1,id:9},


  var cat=localStorage.getItem("category");

  var product=[];
  function filterproduct(){
   for(var i=0;i<arr.length ;i++){
      if(arr[i].category==cat){
         console.log(arr[i]);
         product.push(arr[i]);
      }
   }
   console.log(product)
   Document.getElementById("ecom").innerHtml=product();
   // document.getElementById("ecom").innerHTML=product;
  }

//   document.getElementById('output').innerHTML=row

// var tablee=document.createElement("table");
//  for(let i=0; i<product.length;i++){
//   var row=document.createElement("tr");
//   for(let key in product[i]){
//      var col=document.createElement("td");
//      var node=document.createTextNode(product[i][key])
//      col.appendChild(node)
//      row.appendChild(col)
//   }
//   tablee.appendChild(row)
// }
//   var parent=document.getElementById("profile");
//   parent.appendChild(tablee);
//   tablee.border="1px";
//   tablee.style.borderCollapse="collapse";
 
//  document.getElementById("profile").innerHTML

//  var tablee.addClassList("table)")
// table class="table">


// fibonacci
 var n=6;
 var a=0;
var b=5;
for(let i=0;i<n;i++){
var c=a+b;
console.log(c);
a=b;
b=c;
}

// factorial
var a=4;
var fact=1;
for (let i=1; i<=a;i++){
  fact=fact*i;
  
}console.log(fact);