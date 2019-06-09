import { Component, OnInit, Input, Output, EventEmitter,ElementRef, Renderer2, Injectable, HostListener} from '@angular/core';
import { HttpHandler } from '../../../node_modules/@angular/common/http';
import { DataServiceService } from '../data-service.service';
import { SortService } from '../sort.service'
import { Subscription } from '../../../node_modules/rxjs';
import { Router, RouterLinkActive, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class TagComponent implements OnInit {
  
  @Input() tagName: string
  @Input() makeActive: boolean
 @Input () type: string
 @Input () linkDest: string
 

@HostListener('click') onclick(){
    
}


 queryObj={}
 setQueryObj(key,val){
    this.queryObj[key]=val;
 }


  constructor(private data: DataServiceService, private router: Router, private el:ElementRef, 
              private renderer: Renderer2, private sort: SortService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setQueryObj(this.type,this.tagName)  
  }

}
