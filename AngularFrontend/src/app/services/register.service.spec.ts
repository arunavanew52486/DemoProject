import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
    let service: RegisterService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RegisterService],
        });
        service = TestBed.inject(RegisterService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no outstanding requests
        httpTestingController.verify();
    });
    
    it('should be created: register service', () => {
        expect(service).toBeTruthy();
    });
});
