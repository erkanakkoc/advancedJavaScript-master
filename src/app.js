//typrscript
//state management = durum yönetimi
// Değişken tanımlama  var,let,const
// değişken kullanırken let kullanıcaz. 
// Aynı değişkeni birden fazla kez tanımlamayı engelliyor.

let sayi1 = 10;
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
// console.log(student);

function save(ogrenci, puan=10) {
    console.log(ogrenci.name + " : " + puan);
}

//save(student,100);

function save2(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan);
}
//save2(undefined,student);
// save2(student); 
// Hata verir çünkü student'ı puan la eşleştirip, ogrenci kısmını boş algılar. Bu yüzden name'i de bulamaz

let students = ["Engin Demiroğ", "Erkan Akkoç", "Mert Akkoç", "Cem Argunşah"]
//console.log(students)
 
let students2 = [student,{id:2, name:"Erkan"},"Kuşadası",{city:"Antalya"}]
//console.log(students2)


//rest  - geriye kalanlar (geriye kalan diğer parametreler)
//(C#'ta params, Java'da varArgs) 
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts)
// showProducts(10,["Elma","Armut","Karpuz"]) RestParametre

//Rest te virgül ile göndermek gerekiyor Array olarak göndermemeliyiz

//spread  - Array gibi göndersek bile onu array dışına çıkartıp öyle yazdırıyor
let points = [1,2,3,4,50,4,60,14]
console.log(...points)

console.log(Math.max(...points))

// Spread Operatörü   -  ... array i ayrıştırır
console.log(..."ABC","D",..."EFG","H")

// Destructuring = elimizdeki array in değerlerini değişkenlere atamayı sağlıyor
let populations = [10000,20000,30000,[40000,50000]]
let [small, medium, high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh) 
console.log(maximum)  


function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name: "İçecek"}
console.log(category.id)
console.log(category["name"])





