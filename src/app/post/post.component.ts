import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataServiceService} from '../data-service.service'
import { PostTitleService} from '../post-title.service'
import { GetPostService } from '../get-post.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  myPostTitle
  myPost
  myPostURL = `../../assets/blogData/posts/html/${this.PT.getTitle()}`

  insertPost(){
    var target=document.querySelector('.postWrapper')
    target.innerHTML=this.myPost;
  }
  
  constructor(private router: Router, private data: DataServiceService, private PT: PostTitleService,
             private http: HttpClient, private GP: GetPostService) { }
  
  ngOnInit() {
    //get post title to load from servie
   this.myPostTitle=this.PT.getTitle();
   //get post html using serive
   this.GP.getPostHtml(this.myPostTitle).subscribe(post=>{
     this.myPost=post;
     //add post to html
     this.insertPost();

   })
  
   //this.myPost= this.data.myData.filter(post=> post['title']==this.myPostTitle)[0]
 
  

  }

  ngAfterViewInit(){
//  this.insertPost();
  }

}
