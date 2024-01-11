import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
userArr:any=[];
searchText:any='';
constructor(private router:Router){}
ngOnInit() {
  const localData =localStorage.getItem('userList');
  if(localData!=null){
    this.userArr=JSON.parse(localData);
    
  }

}
onEdit(id:any){
console.log(id)
this.router.navigate(['/addUser',id])
}
onDelete(id:any){
   const index =this.userArr.findIndex((m:any)=>m.id == id)
   this.userArr.splice(index,1)
   localStorage.setItem('userList',JSON.stringify(this.userArr));
   alert("Data is deleted successfylly")
  location.reload();

}


}
