 // 先顯示 Loading 的訊息
 let list=document.getElementById("list");
 list.innerHTML="... Loading ...";
 // 透過 AJAX fetch API 連線到遠端的網址，抓取資料
 /*
     fetch(網址).then(function(response){
         // response 伺服器的回應
     })
 */
 let src="https://yao8762.github.io/wehelp/data/products.json";
 fetch(src).then(function(response){
     // console.log(response);
     // return response.text(); // 用字串的方式取回資料
     return response.json(); // 將資料用 JSON 的格式詮釋成: 物件和陣列的組合
 }).then(function(result){
     // console.log("最終的資料", result.toUpperCase()); //字串的形式很難用
     // console.log("最終的資料", result);
     // 把抓到資料放在畫面上
     list.innerHTML="";
     let product;
     for(let i=0;i<result.length;i++){
         product=result[i];
         //list.innerHTML+="<li><a href="+product.address+">"+product.name.bold()+"</a></li>";
         list.innerHTML+=product.name.bold().link(product.address)+'<br/>';
     };
 });