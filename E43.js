function show_magician(mgs){
    for(let i=0;i<mgs.length;i++){
     console.log(mgs[i])
  
  
    }
  
  }
  function make_great(mgs){
    for(let i=0;i<mgs.length;i++){
        mgs[i]=`Great ${mgs[i]}`;
     
    }
    return mgs;
       }
  magicians=["bil batori","zakoota jin","Kachra rani"]
  cng=make_great(magicians.slice())
  show_magician(magicians)
  show_magician(cng)