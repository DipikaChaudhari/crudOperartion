import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() totalItems:any;
  @Input() cureentPage:any;
  @Input() itemsPerPage:any;
  totalPages=0;
  constructor(){

  }
  ngOnInit(){
    
  }

}
