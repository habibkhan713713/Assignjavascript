function titleCase(str){
str=str.toLowerCase().trim()
str=str[0].toUpperCase()+str.slice(1,);
return str
}
name1="eRIc KhAN";
console.log(name1.toLowerCase(),name1.toUpperCase(),titleCase(name1))