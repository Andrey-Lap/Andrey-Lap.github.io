import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sec6',
  templateUrl: './sec6.component.html',
  styleUrls: ['./sec6.component.scss'],
})
export class Sec6Component {
  public isMobileSmall = false;
  public form!: FormGroup;
  private api = 'https://json-placeholder.mock.beeceptor.com/login'
  
  constructor(public http: HttpClient){}

  ngOnInit() {

    
    this.checkScreenWidth();
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      // agreed: new FormControl(''),
    });
  }

  onSubmit() {
    this.http.post(this.api, this.form.value ).subscribe()
  }

  get name() {
    return this.form.get('username');
  }

  get phone() {
    return this.form.get('password');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.isMobileSmall = window.innerWidth <= 425;
  }
}
