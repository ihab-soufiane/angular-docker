import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  ListHotels:any=[]

  dataHotel={
    Nom:'',
    NbreEtoile:'',
    Description:'',
    image:File,
    Prix:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService ,private act:ActivatedRoute) {
    // constructor(private ds:AdminService,private route:Router ,private act:ActivatedRoute) {

  
    
   


  this.ds.gettAllHotel().subscribe(data=>{
    console.log(data)
    this.ListHotels=data
  })
}
  imageFile: any;
  multipleFiles=[];
 onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];
  }
  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) {
    this.multipleFiles = event.target.files;
    }
    }

    // deleteteacher(index:any){
    //   this.service.deleteonetraining(index._id).subscribe((data:any)=>{
    //     alert(data.message)
    //   })
    //   }
  delete(id:any,i:number){

    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
       this.ListHotels.splice(i,1)

    })

  }
  myForm=new FormGroup({
    
    Nom:new FormControl(),

    NbreEtoile:new FormControl(),

    Description:new FormControl(),

    Prix:new FormControl(),

    image:new FormControl(File),

  })
  sendData(){
    let hotel = {
  
       Nom:this.myForm.value.Nom,
       NbreEtoile: this.myForm.value.NbreEtoile,
       Description: this.myForm.value.Description,
       Prix: this.myForm.value.Prix,
       image:this.imageFile
  
     }
 
     let formData=new  FormData();
    
    formData.append("Nom" ,this.myForm.value.Nom)
    formData.append("NbreEtoile" ,this.myForm.value.NbreEtoile)
     formData.append("Description" ,this.myForm.value.Description)
     formData.append("Prix" ,this.myForm.value.Prix)
     formData.append("image" ,this.imageFile)
    
 console.log(hotel);
  this.ds.AddHotel(formData).subscribe((data:any)=>{
   console.log(data);
  
  },(error:any)=>{
   console.log(error);
  }) 
 }
 ngOnInit(): void {}
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

      

    })  }
  
    // update(){
    //   this.ds.updateHotels(this.id,this.dataHotel).subscribe(
    //     res=>{
    //       console.log(res);
    //     },err=>{
    //       console.log(err);
    //     }
    //   );
    // }
  //  updateeHotel(f:any){
// this.ds.updateHotels(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((newh:any)=>{
    // this.ds.updateHotels(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((newh:any)=>{
      // console.log(newh)
    // })
  //  this.ds.updateHotels(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
  //    console.log(data)
//})
    
// updatehotel(){
//   this.ds.updateHotels(this.act.snapshot.paramMap.get('id'),this.myForm.value).subscribe((newh:any)=>{
//     // console.log(newh)
//   }) 
//   }
// updateeHotel(f:any){
//   let data=f.value
//    this.ds.updateHotels(this.dataHotel.id,data).subscribe({
//      next:(res)=>
//      {
    
//     console.log(res)


//      },
//      error: (err) => {
//    console.log(err);
//    },
//    });
  
//   }

  details(id:any){

    this.ds.getHotelById(id).subscribe(data=>{
      console.log(data)
      this.ListHotels=data
    })
    
  }
 
}
