import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EventEmitter } from '../../../node_modules/protractor';
import { SortService } from '../sort.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class AuthorComponent implements OnInit {
  @Input () author: string
  @Input () makeActive: boolean
 
  onAuthorClicked(e){
    this.sort.setInfo('author', this.author)
   this.router.navigate(['/posts'], { queryParams: { author: this.author } });
  }
  constructor(private router: Router, private sort: SortService) { }

  ngOnInit() {
  }

}
