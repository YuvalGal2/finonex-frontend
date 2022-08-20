import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  submittedMessage: string = 'Well, All validation passed.. data is sent! (not really) ';
  formSubmitted: boolean = false;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.pattern('^\\+380[0-9]{9}$')])
  });
  constructor() { }
  ngOnInit(): void {}

  onFormSubmit(): void {
    this.formSubmitted = true;
  }

}
