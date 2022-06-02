import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

export class PostHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    // Clone the request to add the new header
    const xRequestId = Guid.create().toString();
    const clonedRequest = req.clone({ headers: req.headers.append("X-Request-ID", xRequestId) });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
