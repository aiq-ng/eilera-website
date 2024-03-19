import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from './service/server-request.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'eilera-agro';
  openModal = true;

  constructor(private serverRequestService: ServerRequestService) {}

  ngOnInit(): void {
    this.serverRequestService.openModal$.subscribe((openModal) => {
      this.openModal = openModal;
    });
  }
}
