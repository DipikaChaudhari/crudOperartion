import { OnInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  userForm!: FormGroup;
  public userData:any={
    id:1,
    name:'',
    email:'',
    role:''
  }
  userArr:any=[];
  cureentId:number=0;
  constructor(private activate:ActivatedRoute){
    debugger;
    this.activate.params.subscribe((res:any)=>{
      if(res.id){
        this.cureentId =res.id;
      }
    })

  }
  ngOnInit() {
    const localData =localStorage.getItem('userList');
    if(localData!=null){
      this.userArr=JSON.parse(localData);
      if(this.cureentId!== 0){
        const currentRecod =this.userArr.find((m:any)=>m.id == this.cureentId)
        if(currentRecod!=undefined){
          this.userData=currentRecod;
        }
      }
    }
  }
  @ViewChild('teams') teams!: ElementRef;
	selectedTeam = '';
  onSelected(e:any){
    debugger;
		this.selectedTeam = this.teams.nativeElement.value;
    this.userData.role = this.selectedTeam;
   // localStorage.setItem('userList', this.userArr.role )
  }
  submit(){
    debugger;
    const localData=localStorage.getItem('userList');
    if(localData == null)
    {
      this.userArr.push(this.userData);
      localStorage.setItem('userList',JSON.stringify(this.userArr));
    }
    else{
      const data=JSON.parse(localData);
      this.userData.id=data.length+1;
      this.userArr.push(this.userData)
      localStorage.setItem('userList',JSON.stringify(this.userArr));
    }
    location.reload();

    }
    UpdateData(){
      const currentRecod =this.userArr.find((m:any)=>m.id == this.cureentId)
      if(currentRecod!=undefined){
       const index =this.userArr.findIndex((m:any)=>m.id == this.cureentId)
       this.userArr.splice(index,1)
       this.userArr.push(this.userData)
       localStorage.setItem('userList',JSON.stringify(this.userArr));
      }
      location.reload();

    }

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }
    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
