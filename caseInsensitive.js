const array = ["Patika", "219", "Akbank", "React", "Bootcamp",];


Array.prototype.includesCi = function(search) {

  const words=this.find((index)=>
    index.toLowerCase()===search.toLowerCase()
  )
  return Boolean(words)  
  }
    
  ;
   
  console.log(array.includesCi("patika"))
  console.log(array.includesCi("kırmı"))
  
 

