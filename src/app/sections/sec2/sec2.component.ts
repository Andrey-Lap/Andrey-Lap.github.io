import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sec2',
  templateUrl: './sec2.component.html',
  styleUrls: ['./sec2.component.scss'],
  
})
export class Sec2Component {
public isMobile = false
public isMobileSmall = false
ngOnInit(){
  this.checkScreenWidth();
}
@HostListener('window:resize', ['$event'])
onResize(event: Event): void {
    this.checkScreenWidth();
}
private checkScreenWidth(): void {
  this.isMobile = window.innerWidth <= 860; 
  this.isMobileSmall = window.innerWidth <= 425; 
}
}
