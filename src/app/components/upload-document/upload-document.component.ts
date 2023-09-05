import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
})
export class UploadDocumentComponent {
  uploadDocForm!: FormGroup;
  fileControl!: FormControl;

  get f() {
    return this.uploadDocForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fileControl = new FormControl();
    this.uploadDocForm = this.formBuilder.group({
      fileSrc: ['', Validators.required],
      fileName: ['', Validators.required],
      fileDescription: [''],
    });
  }

  setValueOfFile(files: FileList) {
    console.log();
    this.uploadDocForm.controls['fileSrc'].setValue(
      URL.createObjectURL(files[0])
    );
  }
  handleFileDropped(files: FileList) {
    console.log('dropped files: ', files);
    this.setValueOfFile(files);
  }
  handleFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      if (!inputElement.files[0].type.endsWith('pdf')) {
        this.f['fileSrc'].setErrors({ fileType: true });
        console.log('here');
        return;
      }
      if (inputElement.files[0].size > 4 * 1024 * 1024) {
        this.f['fileSrc'].setErrors({ fileSize: true });
        return;
      }

      this.setValueOfFile(inputElement.files);
    }
  }

  onSubmit() {
    // console.log('formValue: ', this.uploadDocForm.value);
    this.uploadDocForm.markAllAsTouched();
    this.fileControl.markAllAsTouched();
    if (this.uploadDocForm.valid) {
      this.documentService.saveDocument(this.uploadDocForm.value);
      this.router.navigate(['/dashboard']);
    }
  }
}
