import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {


constructor(private _router: Router) {

}
canActivate(
    next: ActivatedRouteSnapshot): boolean {

      const id = next.url[1].path; // recuperer le second argument de l'url et le convertit en entier
      if (isNaN(+id) || +id < 1 ) {
         alert(`ATTENTION, le id ${id} doit etre numérique, on vous redirigera vers la home page`) ;
         this._router.navigate(['/welcome']);
         return false;
      }
    return true;
  }
}
