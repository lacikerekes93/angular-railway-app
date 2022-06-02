import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PostHeaderInterceptor } from './postheader-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: PostHeaderInterceptor, multi: true },
];
