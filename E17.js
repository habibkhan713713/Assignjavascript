names=["Atiq","Mashood","Saad"]
for (let i=0;i<names.length;i++){
    console.log(`${names[i]}, me tmhe dinner pe mado krta hu`)
};
console.log("Bara table mil gaya")
names.splice(0,0,"Sikandar")
names.splice(2,0,"Armaghan")
names.push("Ahmad raza");
for (let i=0;i<names.length;i++){
    console.log(`${names[i]}, me tmhe dinner pe mado krta hu`)
};
console.log("Sirf 2 logo ko bla skta")

names.pop()
names.pop()
names.pop()
names.pop()
for (let i=0;i<names.length;i++){
    console.log(`${names[i]}, me tmhe dinner pe mado krta hu`)
};
names.pop()
names.pop()
console.log(names)