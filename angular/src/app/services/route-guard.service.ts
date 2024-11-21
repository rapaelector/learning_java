import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {HardCodedAuthenticationService} from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let isLogout: boolean = !(this.hardCodedAuthenticationService.isUserLogedIn() ?? false);

    if (isLogout) {
      this.router.navigate(['login']);
    }

    return !isLogout;
  }
}
