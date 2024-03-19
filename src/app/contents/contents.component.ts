import { Component } from '@angular/core';
import { ServerRequestService } from '../service/server-request.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent {
  constructor(private serverRequestService: ServerRequestService) {}

  handleOpenModal = () => {
    this.serverRequestService.toggleOpenModal();
  };
}
