// var OnClick = () => {
//     var inputValue = document.getElementById("name").value
//      console.log(inputValue)


// }
// var a = 10

// var plusFonction = (a) => {
   
//     return a+a
// }
// var loadFonction = (a) => {
   
//     return a * a
// }

// carre = loadFonction(plusFonction(a))
// console.log(carre) 

array = [{ id:1, name:"rayan", age:18},{ id:2, name:"rouj", age:19},{ id:3, name:"aziz", age:20},{ id:4, name:"raed", age:21}]
array.forEach(element => { 
    console.log(element)
    });
var mapping = (element, index) => { 
 
 
    if (element.age < 20) {
        element.age+= 2
    }
    else {
         element.age+= 1
    }
    return element
}
var array2 = array.map(mapping)
   console.log(array2)
//     var mapping = (element, index) => element
//  console.log(array2.map(mapping))





