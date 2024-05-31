import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap, throwError, timeout } from 'rxjs';

@Component({
  selector: 'app-contact',

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  eventTypes = [
    {
      name: 'Birthday',
      value: 'birthday',
    },
    {
      name: 'Baptism/Dedication',
      value: 'baptism',
    },
    {
      name: 'Debut',
      value: 'debut',
    },
    {
      name: 'Others',
      value: 'others',
    },
  ];

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  datePipe = inject(DatePipe);
  _snackBar = inject(MatSnackBar);

  contactForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      eventType: ['', Validators.required],
      date: ['', Validators.required],
      venue: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      eventType: this.contactForm.value.eventType,
      venue: this.contactForm.value.venue,
      message: this.contactForm.value.message,
      date: this.datePipe.transform(this.contactForm.value.date, 'yyyy-MM-dd'),
    };
    console.log(formData);

    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    this.http.post(environment.emailUrl, formData, { headers }).subscribe({
      next: (response) => {
        console.log(response);
      },
    });

    this.openSnackBar('Your message has been successfully sent.', 'close');
    this.contactForm.reset();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
