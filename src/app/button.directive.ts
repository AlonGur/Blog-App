import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'

@Directive({
  selector: '[appButton]'
})


export class ButtonDirective implements OnInit {
 
  constructor(private elementRef: ElementRef, private router:Router) { 

    
  }

  ngOnInit(){
    //this.elementRef.nativeElement.style.backgroundColor='yellow';
    this.elementRef.nativeElement.style.color= 'black';

    this.elementRef.nativeElement.style.borderRadius='10px';
    
  }

}
