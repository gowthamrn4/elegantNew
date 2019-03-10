import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import {Request} from '../firebase_service/request';
@Injectable({
    providedIn:'root'
})
export class DataService{   
    constructor(private firebase:AngularFireDatabase){}
    requestList:AngularFireList<any>;
    form = new FormGroup({
        $key:new FormControl('null'),
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        email:new FormControl('',Validators.email),
        message:new FormControl('',Validators.required),
    });
    getStudent(){
        this.requestList = this.firebase.list('request');
        return this.requestList.snapshotChanges();
    } 
 
    insertRequest(request:Request){
        console.log("name"+this.requestList);
        this.requestList = this.firebase.list('/request');
        this.requestList.push({
            firstName:request.firstName,
            lastName:request.lastName,
            email:request.email,
            message:request.message,
        }); 
      };
     }