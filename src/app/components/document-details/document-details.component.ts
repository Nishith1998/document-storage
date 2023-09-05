import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentDetails } from 'src/app/models/DocumentDetails';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent {

  documentDetails!: DocumentDetails;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.documentDetails = this.route.snapshot.data["documentDetails"];
    console.log("doc details", this.documentDetails)
  }
}
