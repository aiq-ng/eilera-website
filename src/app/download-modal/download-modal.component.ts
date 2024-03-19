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
  error: boolean = false;
  submitted: boolean = false;
  loading: boolean = false;
  response: boolean = false;
  constructor(private serverRequestService: ServerRequestService) {}

  onSubmit(form: NgForm): void {
    this.error = false;
    this.loading = true;
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
          this.loading = false;
          this.response = true;
        },
        error: (err: any) => {
          console.error('Form Submition failed', err);
          this.error = true;
          this.loading = false;
        },
      });
    } else {
      // Form is invalid, display error messages
      this.error = false;
      this.loading = false;
    }
    this.submitted = true;
  }

  handleClose = () => {
    this.serverRequestService.toggleOpenModal();
  };
}
