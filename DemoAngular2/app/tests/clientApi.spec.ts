﻿import { } from 'jasmine';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { inject, TestBed } from '@angular/core/testing';

import * as model from '../../clientapi/WebApiNG2ClientAuto';
import DemoWebApi_Controllers_Client = model.DemoWebApi_Controllers_Client;

describe('clientApi tests', () => {
    let valuesApi: DemoWebApi_Controllers_Client.Values;
    //beforeAll(() => {
    //    console.debug("beforeAll() running...");
    //    TestBed.configureTestingModule({
    //        imports: [HttpModule],
    //        providers: [
    //            {
    //                provide: Http,
    //                useFactory: (backend: XHRBackend, options: RequestOptions) => {
    //                    return new Http(backend, options);
    //                },
    //                deps: [XHRBackend, RequestOptions]
    //            },

    //            {
    //                provide: DemoWebApi_Controllers_Client.Values,
    //                useFactory: (http: Http) => {
    //                    return new DemoWebApi_Controllers_Client.Values("http://localhost:10965/", http);
    //                },
    //                deps: [Http],

    //            },
    //        ]
    //    });
    //});


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, options: RequestOptions) => {
                        console.debug("Http Created.");
                        return new Http(backend, options);
                    },
                    deps: [XHRBackend, RequestOptions]
                },

                {
                    provide: DemoWebApi_Controllers_Client.Values,
                    useFactory: (http: Http) => {
                        console.debug('Values created.');
                        return new DemoWebApi_Controllers_Client.Values("http://localhost:10965/", http);
                    },
                    deps: [Http],

                },
            ]
        });
    });

    beforeEach(inject([DemoWebApi_Controllers_Client.Values], (userService: DemoWebApi_Controllers_Client.Values) => {
        console.debug('before Each running');
        valuesApi = userService;
    }));


    it('true is true', () => expect(true).toBe(true));

    it('Values get',(done) => {
        expect(true).toBe(true);
        valuesApi.get()
            .subscribe(data => {
                expect(data.length).toBeGreaterThan(1);
                done();
                console.debug("Values call done.");
            },
            error => {
                console.warn(error);
            }

            );

    }
    );

});