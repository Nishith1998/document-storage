import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public get isLoading() {
    return this.isLoading$.value;
  }

  setLoading(value: boolean) {
    this.isLoading$.next(value);
  }
  constructor() { }
}
