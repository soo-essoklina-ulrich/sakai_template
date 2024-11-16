import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { JwtService } from '../stock/jwt.service';
import { inject } from '@angular/core';

const url = environment.api ;

const excludeRoute = [
  url + "inscription",
  url + "connexion",
  url + "activation"
]
export const interceptorJwtAddInterceptor: HttpInterceptorFn = (req, next) => {
  const jwt = inject(JwtService).gettoken();
  // console.log(jwt)
  // console.log(req.url)
  // console.log(excludeRoute.includes(req.url))

  if (jwt && !excludeRoute.includes(req.url)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt}`
      }
    })
    return next(req)
  }

  return next(req);
};
