function car(manafactures,modal,other=[]){
    
    
if(other.length!==0){
return {"manafactures":manafactures,"modal":modal,"others":other};
}
else{
    return {"manafactures":manafactures,"modal":modal}
}}

console.log(car("ferrari","A76"))
console.log(car("ferrari","A76",{"color":"blue","tyres":"best"}))
console.log(car("ferrari","A76"))
