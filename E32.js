function insensitive(arr,pres){
    arr=arr.slice()
    for(let i=0;i<arr.length;i++){
           if(pres.toLowerCase()===arr[i].toLowerCase()){
            return true;

           }
    }
    return false;

}
current_users=["admin","khani","adil","shawez","sami"]
new_users=["admin","shawez","sami","altaf hussain","asad"]
for(let i=0;i<new_users.length;i++){
if(insensitive(current_users,new_users[i])){
    console.log(`User name ${new_users[i]} not avalible.Enter new username `)
}
else{
    console.log(`${new_users[i]} Username avalible`)
}


}