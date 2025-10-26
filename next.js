
const ObjectA = {
    a:10,
    b:true
}

console.log(ObjectA);
const copyA = ObjectA;
console.log(copyA);
copyA.a =20;
console.log(ObjectA);
copyA.c = "abc";
console.log(ObjectA);