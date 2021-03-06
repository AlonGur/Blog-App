import { Component, OnInit , Input, HostListener, Injectable} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router} from '@angular/router';

import { DataServiceService } from "../data-service.service";
import { SortService} from "../sort.service"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';
import { validateConfig } from '../../../node_modules/@angular/router/src/config';
import { PostComponent } from '../post/post.component'
import { query } from '../../../node_modules/@angular/core/src/render3';
import { start } from 'repl';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[DataServiceService]
})
@Injectable({
  providedIn: 'root'
})

export class MainComponent implements OnInit {

  myData=[]
  myDisplayData=[]
  uniqueTagArr=[]
  uniqueAuthorArr=[]
  uniqueMonthArr=[]
  route
  currentPage
  PostsPerPage=3
  counterArr
  tagCounter={}
  authorCounter={}
  filteredData=[]
  linkDest="/posts"
 
 
  constructor(private router: Router,route: ActivatedRoute,private data:DataServiceService, 
    private sort:SortService) { 
      this.route=route


   }
  ngOnInit() {
   //gets posts from DataService 
    this.data.getConfig().subscribe(posts => {
       posts['posts'].forEach(post=>  this.myData.push(post))
      
       //create unique tag, author, date arrays to send to sidebar
      this.myData.forEach(post=>{
        post['tags'].forEach(tag=> this.uniqueTagArr.push(tag))
        this.uniqueAuthorArr.push(post['author'])

      })
    
        this.uniqueTagArr=this.uniqueTagArr.filter((val,index,arr)=>{
          return arr.indexOf(val)==index
        })
        this.uniqueAuthorArr=this.uniqueAuthorArr.filter((val,index,arr)=>{
          return arr.indexOf(val)==index
        })


        //set counters for sidebar
        this.tagCounter= this.data.setCounter(this.uniqueTagArr, this.myData,'tags');
        this.authorCounter=this.data.setCounter(this.uniqueAuthorArr,this.myData,'author')
      })
      
     
     //set display data to all data. display data will be filtered by URL query params
      this.myDisplayData=this.myData
      //subscribe to route query map to filter data if needed
     
      this.route.paramMap.subscribe(params => {
        this.currentPage=params.params['page'] | 0;
      })
     
      this.route.queryParamMap.subscribe(query=>{
        this.filteredData=this.data.filterData(this.myData ,query.params);
      })   
  }

}
