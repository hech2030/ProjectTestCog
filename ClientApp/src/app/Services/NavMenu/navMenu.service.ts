import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavMenuService {
  private getSource = new Subject<any>();
  get$ = this.getSource.asObservable();

  triggerNavMenuGet() {
    this.getSource.next();
  }
}
