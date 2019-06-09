import { Component, OnInit , Input, HostListener} from '@angular/core';
import { PostTitleService } from '../post-title.service'

@Component({
  selector: 'app-post-prev',
  templateUrl: './post-prev.component.html',
  styleUrls: ['./post-prev.component.scss']
})
export class PostPrevComponent implements OnInit {
  @Input () post
  postKeys=[]
 
  titleHandler(){
    this.PT.setTitle(this.post.title)
  }
  constructor(private PT: PostTitleService) { }

  ngOnInit() {
    for(let key in this.post){
      this.postKeys.push(key)
    }
  }

}
