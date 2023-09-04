import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  @Output()
  fileDropped: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostBinding('class.fileDropping') isFileDropping: boolean = false;

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isFileDropping = true;
  }
  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isFileDropping = false;
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isFileDropping = false;

    const files = event.dataTransfer?.files;
    if(files && files?.length > 0) {
      console.log("files: ", files.length);
      this.fileDropped.emit(files);
    }
  }
}
