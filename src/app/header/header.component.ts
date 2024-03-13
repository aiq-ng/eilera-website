import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = [
    { path: "#privacy", label: "Privacy" },
    { path: "#help", label: "Help Center" },
    { path: "#blog", label: "Blog" },
    { path: "#features", label: "Features" },
    
  ];
}
