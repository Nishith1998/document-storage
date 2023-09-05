import { Component } from '@angular/core';
import { DocumentDetails } from 'src/app/models/DocumentDetails';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  documentList!: DocumentDetails[];
  displayedColumns: string[] = ["fileName"];
  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentList = this.documentService.getDocuments();
  }

}
