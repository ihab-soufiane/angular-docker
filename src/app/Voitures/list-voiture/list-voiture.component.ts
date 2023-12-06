import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent implements OnInit{

  ListVoitures:any=[]
 
  dataVoiture={
    nom:'',
    model:'',
    categorie:'',
    image:'File',
    prix:0,
    nbrePlace:'',
    puissance:'',
  
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router,private act:ActivatedRoute) {
   
    this.ds.gettAllVoitures().subscribe(data=>{
      console.log(data)
      this.ListVoitures=data
    })
    
   }

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deleteVoiture(id).subscribe(response=>{
      console.log(response)
       this.ListVoitures.splice(i,1)

    })

  }
  imageFile: any;

 onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];
  }
  myForm=new FormGroup({
    
    nom:new FormControl(),

    model:new FormControl(),

    categorie:new FormControl(),

    prix:new FormControl(),
    
    nbrePlace:new FormControl(),
    
    puissance:new FormControl(),

    image:new FormControl(File),

  })
  send(){
    let voiture = {
  
      nom:this.myForm.value.nom,
      model: this.myForm.value.model,
      categorie: this.myForm.value.categorie,
      prix: this.myForm.value.prix,
      nbrePlace: this.myForm.value.nbrePlace,
      puissance: this.myForm.value.puissance,
      image:this.imageFile
  
     }
 
     let formData=new  FormData();
    
     formData.append("nom" ,this.myForm.value.nom)
     formData.append("model" ,this.myForm.value.model)
     formData.append("categorie" ,this.myForm.value.categorie)
     formData.append("prix" ,this.myForm.value.prix)
     formData.append("nbrePlace" ,this.myForm.value.nbrePlace)
     formData.append("puissance" ,this.myForm.value.puissance)
     formData.append("image" ,this.imageFile)
    
 console.log(voiture);
  this.ds.AddVoiture(formData).subscribe((data:any)=>{
   console.log(data);
  
  },(error:any)=>{
   console.log(error);
  }) 
 }

  getdata(nom:string,model:string,categorie:string,prix:number,image:string,nbrePlace:string,puissance:string,id:any){
    this.messageSuccess=''
    this.dataVoiture.nom=nom
    this.dataVoiture.model=model
    this.dataVoiture.categorie=categorie
    this.dataVoiture.prix=prix
    this.dataVoiture.image=image
    this.dataVoiture.puissance=puissance
    this.dataVoiture.nbrePlace=nbrePlace
    this.dataVoiture.id=id
    console.log(this.dataVoiture)

  }
  updateVoiture(f:any){
    let data=f.value
    this.ds.updateVoiture(this.dataVoiture.id,data).subscribe(response=>
      {
     
        let indexId=this.ListVoitures.findIndex((obj:any)=>obj._id==this.dataVoiture.id)

        this.ListVoitures[indexId].nom=data.nom
        this.ListVoitures[indexId].model=data.model
        this.ListVoitures[indexId].categorie=data.categorie
        this.ListVoitures[indexId].prix=data.prix
        this.ListVoitures[indexId].image=data.image
        this.ListVoitures[indexId].puissance=data.puissance
        this.ListVoitures[indexId].nbrePlace=data.nbrePlace

        this.messageSuccess=`this student ${this.ListVoitures[indexId].firstname} is updated`
        console.log(this.ListVoitures)


      })
  }


  details(id:any){

    this.ds.getVoitureById(id).subscribe(data=>{
      console.log(data)
      this.ListVoitures=data
    })
  }

}
