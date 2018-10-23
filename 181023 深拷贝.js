// 一层拷贝
// var obj1 = { a: 10, b: 20, c: 30 };
// var obj2 = Object.assign({}, obj1);
// obj2.b = 100;
// console.log(obj1);


// 递归
function deepClone(obj){
    let objClone = Array.isArray(obj) ? [] : {};
    if(obj && typeof obj === "object") {
        for(key in obj){
            if(obj.hasOwnProperty(key)) {
                // 判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    

let a = [1,2,3,4],
    b = deepClone(a);
a[0] = 2;
console.log(a,b);


// 借用JSON对象的parse和stringify
// function deepClone(obj){
//     let _obj = JSON.stringify(obj),
//         objClone = JSON.parse(_obj);
//     return objClone;
// }    

// let a = [0,1,[2,3],4],
//     b = deepClone(a);
// a[0] = 1;
// a[2][0] = 1;
// console.log(a,b);


// 借用JQ的extend方法
// let a = [0,1,[2,3],4],
//     b = $.extend(true,[],a);
// a[0] = 1;
// a[2][0] = 1;
// console.log(a,b);


// 使用Object.create()方法
// function deepClone(initalObj, finalObj) {    
//   var obj = finalObj || {};    
//   for (var i in initalObj) {
//     // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
//     var prop = initalObj[i];        
//     if(prop === obj) {            
//       continue;
//     }     
    
//     if (typeof prop === 'object') {
//       obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
//     } else {
//       obj[i] = prop;
//     }
//   }    
//   return obj;
// }