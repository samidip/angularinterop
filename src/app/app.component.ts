import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularinterop';

  public windowWidth: any;
  public windowHeight: any;
  
  ngOnInit() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])

  resizeWindow() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
