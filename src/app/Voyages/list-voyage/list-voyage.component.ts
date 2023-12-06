import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-voyage',
  templateUrl: './list-voyage.component.html',
  styleUrls: ['./list-voyage.component.css']
})
export class ListVoyageComponent implements OnInit{

  ListVoyage:any=[]
 
  dataVoyage={
    destination:'',
    nbreJour:'',
    date:'',
    description:'',
    image:'File',
    prix:0,
  
  
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router,private act:ActivatedRoute) {
   
    this.ds.gettAllVoyage().subscribe(data=>{
      console.log(data)
      this.ListVoyage=data
    })
    
   }

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deleteVoyage(id).subscribe(response=>{
      console.log(response)
       this.ListVoyage.splice(i,1)

    })

  }
  imageFile: any;

 onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];
  }
  myForm=new FormGroup({
    
    destination:new FormControl(),

    nbreJour:new FormControl(),

    date:new FormControl(),
    description:new FormControl(),

    prix:new FormControl(),

    image:new FormControl(File),

  })
  send(){
    let voyage = {
  
      destination:this.myForm.value.destination,
      nbreJour: this.myForm.value.nbreJour,
      date: this.myForm.value.date,
      description: this.myForm.value.description,
      prix: this.myForm.value.prix,
      
      image:this.imageFile
  
     }
 
     let formData=new  FormData();
    
     formData.append("destination" ,this.myForm.value.destination)
     formData.append("nbreJour" ,this.myForm.value.nbreJour)
     formData.append("date" ,this.myForm.value.date)
     formData.append("description" ,this.myForm.value.description)
     formData.append("prix" ,this.myForm.value.prix)
     formData.append("image" ,this.imageFile)
    
 console.log(voyage);
  this.ds.AddVoyage(formData).subscribe((data:any)=>{
   console.log(data);
  
  },(error:any)=>{
   console.log(error);
  }) 
 }

  getdata(destination:string,nbreJour:string,prix:number,image:string,date:string,id:any){
    this.messageSuccess=''
    this.dataVoyage.destination=destination
    this.dataVoyage.nbreJour=nbreJour
    this.dataVoyage.date=date
    this.dataVoyage.prix=prix
    this.dataVoyage.image=image
    
    this.dataVoyage.id=id
    console.log(this.dataVoyage)

  }
  updateHotel(f:any){
    let data=f.value
    this.ds.updateHotels(this.dataVoyage.id,data).subscribe(response=>
      {
     
        let indexId=this.ListVoyage.findIndex((obj:any)=>obj._id==this.dataVoyage.id)

        this.ListVoyage[indexId].nom=data.nom
        this.ListVoyage[indexId].model=data.model
        this.ListVoyage[indexId].categorie=data.categorie
        this.ListVoyage[indexId].prix=data.prix
        this.ListVoyage[indexId].image=data.image
        

        this.messageSuccess=`this student ${this.ListVoyage[indexId].firstname} is updated`
        console.log(this.ListVoyage)


      })
  }


  details(id:any){

    this.ds.getVoyageById(id).subscribe(data=>{
      console.log(data)
      this.ListVoyage=data
    })
  }

}
