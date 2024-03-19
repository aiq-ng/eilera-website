import { Component } from '@angular/core';
import { ServerRequestService } from '../service/server-request.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css'],
})
export class DownloadModalComponent {
  name: string = '';
  email: string = '';
  submitted: boolean = false;
  response: boolean = false;
  constructor(private serverRequestService: ServerRequestService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Form is valid, proceed with submission
      const _userDetails = {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
      };
      console.log(_userDetails);
      this.serverRequestService.registerUser(_userDetails).subscribe({
        next: () => {
          console.log('User registration Successfully');
          this.response = true;
        },
        error: (err: any) => {
          console.error('Form Submition failed', err);
        },
      });
    } else {
      // Form is invalid, display error messages
      console.log('Form submission failed. Please correct errors.');
    }
    this.submitted = true;
  }

  handleClose = () => {
    this.serverRequestService.toggleOpenModal();
  };
}
