import { Component } from '@angular/core';
import { ServerRequestService } from '../service/server-request.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private serverRequestService: ServerRequestService) {}

  handleOpenModal = () => {
    this.serverRequestService.toggleOpenModal();
  };
}
