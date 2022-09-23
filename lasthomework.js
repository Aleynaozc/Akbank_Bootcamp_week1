const folders =[
{
    id:1,
    name:'file 1',
    files:[
        {id:17,name:'profil.jpg'},
        {id:18,name:'manzara.jpg'}
    ]
},
{
    id:2,
    name:'file 2',
    files:[
        {id:21,name:'foto.jpg'},
        {id:22,name:'dosya.jpg'},
        
    ]
},
{
    id:3,
    name:'file 3',
    files:[
        {id:32,name:'pc.jpg'},
        {id:33,name:'phone.jpg'},
        
    ]
},
{
    id:4,
    name:'file 4',
    files:[
        {id:35,name:'home.jpg'},
        {id:36,name:'hotel.jpg'},
        
    ]
},

]
//Klasörü ve altındaki bütün dosyaları siliyor.
// function removeFolder (id) {
    
//     const removedFolder= folders.filter(folder => folder.id !== id)
    
// console.log(removedFolder)
// }
// removeFolder(1)

// //Dosyayı siliyor.
// function remove(fileid) {
//     folders.forEach(d => {
//     d["files"] = d["files"].filter(file => file.id !== fileid);
//    })
//  }
//  console.log(folders)
// remove(21)
 

//  function copy(fileName,folderName){
//      const folder = folders.find((index) => index.id === folderName);

//      var file =   folders.forEach((item) => {
//          item.files.find((index) => index.id ===  fileName);
//        }

//      )
//  }



const copy =(fileID,folderId)=>{
  let copyFile ;
    folders.map((data)=>{
        data.files.map((file)=>{
            if(file.id === fileID)
            {
               copyFile = file;
               console.log(copyFile)
            }
        });   
    })
    folders.map((folder)=>{
        if(folder.id === folderId){
            folder.files.push(copyFile)
            console.log(folders)
        }
    })
 }
 const move =(fileID,folderId)=>{
    let copyFile ;
      folders.map((data)=>{
          data.files.map((file)=>{
              if(file.id === fileID)
              {
                 copyFile = file;
                 console.log(copyFile)
              }

             data.files= data.files.filter((hidden)=>hidden.id!==fileID)
          });   
      })
      folders.map((folder)=>{
          if(folder.id === folderId){
              folder.files.push(copyFile)
              console.log(folders)
          }
      })
   }
const parentFolderOf = (fileId)=>{
 folders.map((folder)=>
 folder.files.map((file)=>{
   if(file.id === fileId){
    console.log(folder.id)
   }
 })
 )
}
   parentFolderOf(17)
//  function move(a, b) {
//     let data;
//     folders.map((folder) => {
//       folder.files?.map((file) => {
//         if (file.id === a) {
//           data = file;
//         }
//         folder.files = folder.files.filter((x) => x.id !== a);
//       });
//     });
//     folders.map((folder) => {
//       if (folder.id === b) {
//         folder.files.push(data);
//       }
//     });
//     folders.map((folder) => {
//       console.log(folder);
//     });
//   }
  

//   copy(35,2)
//  move(17,2)//dosyayı klasöre taşıyacak
// copy(18,4)//kopyasını oluşturacak
// remove(17)//Dosyayı silecek
// removeFolder(6) //Klasörü ve altındaki bütün dosyaları silecek