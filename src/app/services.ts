import { BasicRemoteServiceWithCache } from './service/basicRemoteServiceWithCache.service';

export const APP_SERVICES = [
    { provide: BasicRemoteServiceWithCache, useClass: BasicRemoteServiceWithCache }
];
