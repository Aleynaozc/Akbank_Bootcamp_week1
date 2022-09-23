// let data = [ 
  
 
// {    "NameSurname": "Aleyna Ozcelik" ,
//      "Company":"Patika.dev",
//      "Email":"aleynaozcelik48@gmail.com"  ,
//      "Date":"20.06.1997"   ,
//      "Country":"Turkey"  ,
//      "City":"Mugla"  
// },
 
// {  "NameSurname" : "Cigdem Taskın", 
//    "Company":"Kodluyoruz"  ,
//    "Email":"cigdemtask@gmail.com"  ,
//    "Date":"10.04.1997"   ,
//    "Country":"Turkey"  ,
//    "City":"Ankara"  
// }
//  ]


//  const objkey = console.log(JSON.parse(JSON.stringify({Object.keys(JsonObject[0])})));

//  const objvalue = console.log(JSON.parse(JSON.stringify({Object.values(JsonObject[0])})),",",JSON.parse(JSON.stringify(Object.values(JsonObject[1]))))
 
const input = {
   "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
   "data": [
       ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
       ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}

const sampleoutput = [
   {
       "Name Surname": "Hyacinth Vincent",
       "Company": "Duis Corporation",
       "Email": "iaculis.enim@magnaCrasconvallis.ca",
       "Date": "28/06/2022",
       "Country": "Eritrea",
       "City": "Lyubertsy"
   },
   {
       "Name Surname": "Brenden Martinez",
       "Company": "olutpat Nunc Associates",
       "Email": "iaculis@estMauris.org",
       "Date": "24/03/2021",
       "Country": "British Indian Ocean Territory",
       "City": "Colwood"
   }
]

const denormalization = (el)=>{
   return el.data.map((n)=>
      el.cols.reduce((acc, value, index) => {
        acc[value] = n[index]
        return acc;
       }, {})
      )
}
console.log(denormalization(input));
