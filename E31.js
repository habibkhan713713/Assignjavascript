users=["admin","khan","saad","atiq","mashhood"]
for(let i=0;i<users.length;i++){
   if(users.length===0){

    console.log("We need to add more users")
   }else{ 
    if(users[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${users[i]}, thank you for logging in again.`)
    };};
}

users=[]
if (users.length===0){
    console.log("WE need to add more users")
}
else{
for(let i=0;i<users.length;i++){
    
     if(users[i]=="admin"){
         console.log("Hello admin, would you like to see a status report?")
     }
     else{
         console.log(`Hello ${users[i]}, thank you for logging in again.`)
     };
 }}