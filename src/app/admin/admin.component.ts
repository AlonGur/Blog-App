import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationError } from '@angular/router';

import { DataServiceService } from "../data-service.service";
import { PostTitleService } from '../post-title.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myPosts=[]
  filteredPosts
  uniqueTagArr=[]
  uniqueAuthorArr=[]
  authorCounter={}
  tagCounter={}
  linkDest="/admin"
 
  setDirection(target){
    if(target.classList.contains('sortSelected')){
      if(target.classList.contains('fa-sort-up')){
          target.classList.replace('fa-sort-up','fa-sort-down')
      }
      else{
        target.classList.replace('fa-sort-down','fa-sort-up')
      }
   
      
      this.myPosts.reverse();
    }
  
  }
  onTitleClick(e){
    let category= e.target.dataset.cat
    if(e.target.classList.contains('sortSelected')){
      this.setDirection(e.target)
    }
    else{
      let prevSelection =Array.from(document.querySelectorAll('.sortSelected'))
      
      if(prevSelection){
        prevSelection.forEach(node=> node.classList.remove('fa-sort-up','fa-sort-down', 'sortSelected'))
      }
      e.target.classList.add('sortSelected')
      e.target.classList.add('fa-sort-up')

      this.myPosts.sort((a,b)=> a[category]< b[category] ? 1 : -1)
    
    }
 
  }

  constructor(private data: DataServiceService, private router: Router, private route: ActivatedRoute,
  private PT: PostTitleService) {
  
   }

  ngOnInit() {
    this.data.getConfig().subscribe(posts => {
      posts['posts'].forEach(post=>  this.myPosts.push(post))
      this.filteredPosts= this.myPosts
      this.myPosts.forEach(post=>{
        post['tags'].forEach(tag=> this.uniqueTagArr.push(tag))
        this.uniqueAuthorArr.push(post['author'])
     })
   
       this.uniqueTagArr=this.uniqueTagArr.filter((val,index,arr)=>{
         return arr.indexOf(val)==index
       })
       this.uniqueAuthorArr=this.uniqueAuthorArr.filter((val,index,arr)=>{
         return arr.indexOf(val)==index
       })
       this.tagCounter=this.data.setCounter(this.uniqueTagArr, this.myPosts,'tags');
       this.authorCounter=this.data.setCounter(this.uniqueAuthorArr,this.myPosts,'author')
      

     })

     this.route.queryParamMap.subscribe(query=>{
      this.filteredPosts=this.data.filterData(this.myPosts ,query['params'])
    })
   

     
  }

}
