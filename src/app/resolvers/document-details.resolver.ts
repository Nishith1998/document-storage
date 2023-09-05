import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DocumentService } from '../services/document.service';
import { DocumentDetails } from '../models/DocumentDetails';


// @Injectable()
// export class  DocumentDetailsResolver implements Resolve<Observable<any>> {
//   constructor(private documentService: DocumentService, private route: ActivatedRoute) {
//     console.log(this.route.snapshot.params['id'])
//   }

//   resolve(): Observable<any> {
//     console.log("asd", this.route)
//     // this.route.paramMap.subscribe( paramMap => {
//     //   // this.bankName = paramMap.get('bank');
//     //   console.log("asdf: ", paramMap.get('id'))
//     // })
//     // console.log(this.route.snapshot.paramMap.get('id'));
//     console.log(this.route.snapshot.params['id']);
//     return of(this.documentService.getDocument(0));
//   }
// }

export const DocumentDetailsResolver: ResolveFn<Observable<DocumentDetails>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return of(inject(DocumentService).getDocument(+route.paramMap.get('id')!));
    };
