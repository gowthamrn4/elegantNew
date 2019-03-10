import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DataService } from '../firebase_service/data.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
   getData:any;
   message:boolean;
   updateMessage:boolean;
   submitted:boolean;
   myData=[];
   studentArray = [];
  constructor(private dataservice:DataService) { }
  formControls = this.dataservice.form.controls;
  ngOnInit() {
    this.dataservice.getStudent().subscribe(
      list => {
            this.studentArray = list.map(item => {
              return {
                $key:item.key,
                ...item.payload.val()
              };
            })
            console.log("get"+this.studentArray);
            for(var i=0;i<this.studentArray.length;i++){
              console.log(this.studentArray[i])
              this.myData.push(this.studentArray[i]);
            }
      }
    );
  }
  onSubmit(){
    { 
      this.submitted =true;
      if (this.dataservice.form.valid){
        console.log(this.dataservice.form.value);
        if(this.dataservice.form.get('$key').value == null)
       this.dataservice.insertRequest(this.dataservice.form.value);
      this.dataservice.form.setValue({
       $key: null,
       firstName:'',
       lastName:'',
       email:'',
       message:''
     });
     this.message=true;
     swal("Sent Successfully");
     setTimeout(() => this.message = false,3000);
      }
     
    }
  }
}
