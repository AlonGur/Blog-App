import { Component, OnInit , Input} from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {



@Input () uniqueTagArr 
@Input () authors 
@Input () counterArr
@Input () authorCounter
@Input () linkDest


  constructor() {
   
   }

  ngOnInit() {
    console.log('SIDEBARRRRR', this.uniqueTagArr, this.authorCounter, this.authors, this.counterArr)
    }
  
    ngAfterViewInit(){
    
    }
   
  }


