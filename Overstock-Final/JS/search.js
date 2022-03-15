    let api = "https://https://overstockk.herokuapp.com/product";
    async function fetchData(){
        try{
            var res = await fetch("https://overstockk.herokuapp.com/product");
        data = await res.json();
        // console.log(data);
        }catch(err){
            console.log("err:",err);
        }
    }
fetchData();    
document.querySelector(".sofa").addEventListener("click",function(){
   dataStore(data,"sofa");
})
document.querySelector(".sofa2").addEventListener("click",function(){
   dataStore(data,"sofa");
})
document.querySelector(".tv").addEventListener("click",function(){
   dataStore(data,"T");
})
document.querySelector(".console").addEventListener("click",function(){
   dataStore(data,"C");
})
document.querySelector(".sectional").addEventListener("click",function(){
   dataStore(data,"Sectionals");
})
document.querySelector(".recliner").addEventListener("click",function(){
   dataStore(data,"Recliners");
})
document.querySelector(".benches").addEventListener("click",function(){
   dataStore(data,"Benches");
})
document.querySelector(".ottoman").addEventListener("click",function(){
   dataStore(data,"O");
})
document.querySelector(".accent").addEventListener("click",function(){
   dataStore(data,"A");
})
document.querySelector(".seats").addEventListener("click",function(){
   dataStore(data,"sofa");
})
document.querySelector(".futton").addEventListener("click",function(){
   dataStore(data,"Sectionals");
})
document.querySelector(".books").addEventListener("click",function(){
   dataStore(data,"Benches");
})

document.querySelector(".bed").addEventListener("click",function(){
   dataStore(data,"bed");
})
// localStorage.setItem("product3Cat",JSON.stringify(catName));
var dataStoreArr;
function dataStore(data,a){
    dataStoreArr=[];
    console.log("HI")
    data.forEach((ele)=>{
        let eleArr=ele.category.toString();
         if(eleArr==a || eleArr[0]==a){
              dataStoreArr.push(ele);
         }else{
             console.log("NO",ele.category)

         }
    });
    console.log(dataStoreArr);
    localStorage.setItem("product3Data",JSON.stringify(dataStoreArr));
    window.location.href="/product3.html"
 }
