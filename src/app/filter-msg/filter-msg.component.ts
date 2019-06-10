import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-filter-msg',
  templateUrl: './filter-msg.component.html',
  styleUrls: ['./filter-msg.component.scss']
})
export class FilterMsgComponent implements OnInit {

  filterKey=''
  filterVal=''

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(query=>{
      for(var key in query['params']){
        this.filterKey=key;
        this.filterVal=query['params'][key]
      }
    })
  }

}
