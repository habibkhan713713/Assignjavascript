function make_sandwich(...args){
    console.log("The sandwhich  should contain :")
    for(let i=0;i<args.length;i++){
   console.log(args[i])

    }
}
make_sandwich("Cheese")
make_sandwich("Cheese","cucumber")
make_sandwich("cheese","patty","cucumber")