import { Component ,OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit{

  ListHotels:any=[]

  dataHotel={
    Nom:'',
    NbreEtoile:'',
    Description:'',
    image:File,
    Prix:0,
    id:'',
  }
  imageFile: any;
  onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];

}
  messageSuccess=''
  constructor(private ds:AdminService,private route:Router ,private act:ActivatedRoute) {}
    ngOnInit(): void{
      this.ds.gettAllHotel().subscribe({
        next:(res)=>{
          this.ListHotels=res;
          console.log(res);
        },
        error:(err)=>{
          console.log(err)
        }
      })
    // this.ds.gettAllHotel().subscribe(data=>{
    //   console.log(data)
    //   this.ListHotels=data
    // })
    
   }
  


  delete(id:any,i:number){

    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
       this.ListHotels.splice(i,1)

    })

  }



  getdata(Nom:string,NbreEtoile:string,Description:string,Prix:number,image:string,id:any){
    this.messageSuccess=''
    this.dataHotel.Nom=Nom
    this.dataHotel.NbreEtoile=NbreEtoile
    this.dataHotel.Description=Description
    this.dataHotel.Prix=Prix
 
    this.dataHotel.id=id
    console.log(this.dataHotel)
    
  }
  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.AddHotel(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/list'])

    })  }

updateeHotel(f:any){
  let data=f.value
   this.ds.updateHotels(this.dataHotel.id,data).subscribe({
     next:(res)=>
     {
    
    console.log(res)


     },
     error: (err) => {
   console.log(err);
   },
   });
  
 }
 
//  selectMultipleImage(event: any) {
//    if (event.target.files.length > 0) {
//    this.multipleFiles = event.target.files;
//    }
//    }

 myForm=new FormGroup({
  reference:new FormControl(),
  Nom:new FormControl(),

  NbreEtoile:new FormControl(),

  Description:new FormControl(),

  Prix:new FormControl(),

  image:new FormControl(File),

})
sendData(){
  let hotel = {
    reference:this.myForm.value.reference,
    Nom:this.myForm.value.Nom,
    NbreEtoile: this.myForm.value.NbreEtoile,
    Description: this.myForm.value.Description,
    Prix: this.myForm.value.Prix,
    image:this.imageFile

  }

   let formData=new  FormData();
   formData.append("reference" ,this.myForm.value.reference)
  formData.append("Nom" ,this.myForm.value.Nom)
  formData.append("NbreEtoile" ,this.myForm.value.NbreEtoile)
   formData.append("Description" ,this.myForm.value.Description)
   formData.append("Prix" ,this.myForm.value.Prix)
   formData.append("image",this.imageFile)
  
console.log(hotel);
this.ds.AddHotel(formData).subscribe((data:any)=>{
 console.log(data);

},(error:any)=>{
 console.log(error);
}) 
}


  details(id:any){

    this.ds.getHotelById(id).subscribe(data=>{
      console.log(data)
      this.ListHotels=data
    })
    
  }
  

}
