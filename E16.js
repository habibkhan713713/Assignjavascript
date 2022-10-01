names=["Atiq","Mashood","Saad"]
console.log(`${names[0]}, me tmhe dinner pe mado krta hu`)
console.log(`${names[1]}, me tmhe dinner pe mado krta hu`)
console.log(`${names[2]}, me tmhe dinner pe mado krta hu`)
console.log("Bara table mil gaya")
names.splice(0,0,"Sikandar")
names.splice(2,0,"Armaghan")
names.push("Ahmad raza");
for (let i=0;i<names.length;i++){
    console.log(`${names[i]}, me tmhe dinner pe mado krta hu`)
};
