import { Component, OnInit , Input} from '@angular/core';
import {PostTitleService} from '../post-title.service'

@Component({
  selector: 'app-admin-prev',
  templateUrl: './admin-prev.component.html',
  styleUrls: ['./admin-prev.component.scss']
})
export class AdminPrevComponent implements OnInit {
  @Input () post
  @Input () myIndex
  
  titleHandler(){
    //set title here
    this.PT.setTitle(this.post.title)
  }
  constructor(private PT:PostTitleService) { }

  ngOnInit() {
    
  }

}
