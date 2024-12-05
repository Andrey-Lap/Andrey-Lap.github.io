import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.scss'],
})
export class Sec1Component {
  public isMobile = false
  public isMobileSmall = false
  public open = false
  public ngOnInit() {
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
