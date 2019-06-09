import { Component, OnInit, Input } from '@angular/core';
import { PostTitleService } from '../post-title.service'
import {GetPostService} from '../get-post.service'
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute,Router } from '../../../node_modules/@angular/router';
import { PostTitlePipe } from '../post-title.pipe';
import { MarkdownToHtmlModule } from '../../../node_modules/markdown-to-html-pipe';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  myPost
  myPostIndex
  allPosts
  @Input ()myPostTitle
  markDown
  myPipe
  myRoute



  clickHandler(e){
  }

  insertPost(){
    var target=document.querySelector('.postWrapper')
    target.innerHTML=this.myPost;
  }
  saveChanges(e){
    let postAfterChanges={
      title: <HTMLInputElement>document.querySelector('.title'),
      author: <HTMLInputElement>document.querySelector('.author'),
      date: <HTMLInputElement>document.querySelector('.date'),
    }
   
    this.allPosts.posts[this.myPostIndex]['title']=postAfterChanges.title
    this.allPosts.posts[this.myPostIndex]['author']=postAfterChanges.author
    this.allPosts.posts[this.myPostIndex]['date']=postAfterChanges.date

    this.data.putConfig(this.allPosts.posts[this.myPostIndex])
  }
  constructor( private PT: PostTitleService, private GP: GetPostService, private data: DataServiceService,
              private route: ActivatedRoute, private tPipe: PostTitlePipe, private htmlPipe: MarkdownToHtmlModule,
              private router: Router
        ) { }

  ngOnInit() {
  this.myPostTitle= this.route.snapshot.params.post
 
   
   this.allPosts=JSON.parse(localStorage.getItem('myPosts'))
   this.myPost=this.allPosts['posts'].filter((post,ind,arr)=>{
      if(post['title']===this.PT.getTitle()){
        this.myPost=post;
        this.myPostIndex=ind
        return true
      }
      else{
        return false
      }
     
   })[0]
   
   if(!this.myPost){
   }

    this.GP.getPostMd(this.myPost['title']).subscribe(postMD=>{
      this.markDown=postMD;
     
    })
}

}
