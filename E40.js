function make_album(artist_name,title,no_tracks=null){
 if (no_tracks!==null){
    return {"artist name":artist_name,"album title":title,"No of tracks":no_tracks}
 }
    
 else{
    return {"artist name":artist_name,"album title":title}
 }
}

console.log(make_album("Sam","kuchbhi"))
console.log(make_album("Quratulain baloch","judaiyan"))
console.log(make_album("Aima baig","duhaiya",9))