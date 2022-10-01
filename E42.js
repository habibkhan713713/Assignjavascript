function show_magician(mgs){
    for(let i=0;i<mgs.length;i++){
     console.log(mgs[i])
  
  
    }
  
  
  }
  function make_great(mgs){
    for(let i=0;i<mgs.length;i++){
        mgs[i]=`Great ${mgs[i]}`
     
     
       }

  }
  magicians=["bil batori","zakoota jin","Kachra rani"]
  make_great(magicians)
  show_magician(magicians)