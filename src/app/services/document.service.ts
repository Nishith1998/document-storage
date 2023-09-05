import { Injectable } from '@angular/core';
import { DocumentDetails } from '../models/DocumentDetails';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private readonly STORAGE_KEY = 'documentList';

  constructor() {}

  saveDocument(document: DocumentDetails): void {
    const documents = this.getDocuments();
    documents.push(document);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(documents));
  }

  getDocuments(): DocumentDetails[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  }

  getDocument(index: number): DocumentDetails {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData)[index] : null;
  }
}
