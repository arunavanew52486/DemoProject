import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
 
describe('LoginService', () => {
    let service: LoginService;
    let httpTestingController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LoginService],
        });
    
        // Inject the service and the testing controller for HTTP requests
        service = TestBed.inject(LoginService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });
    
    afterEach(() => {
        // After every test, assert that there are no outstanding requests
        httpTestingController.verify();
    });
    
    //! TEST 1 ---------------------------
    it('should be created: login service', () => {
        expect(service).toBeTruthy();
    });
    
    //! TEST 2 ---------------------------
    it('LoginService: should send a POST request with login data', fakeAsync(() => {
        const URL = 'http://localhost:8080/login';

        const mockLoginData = { email: 'arunava@gmail.com', password: '12345' };
        const mockResponse = { "email": "arunava@gmail.com", "status": "200 OK" };
    
        //! Make the HTTP POST request
        service.login(mockLoginData).subscribe((res) => {
            expect(res).toEqual(mockResponse);
        });
    
        //! Expect a single request to a specific URL with the login data
        const req = httpTestingController.expectOne(URL);
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(mockLoginData);
    
        //! Simulate a successful HTTP response
        req.flush(mockResponse);
    
        //! Ensure that the observable completed
        tick();
    }));
    
    //! TEST 3 ---------------------------
    it('LoginService: should handle HTTP errors', fakeAsync(() => {
        const URL = 'http://localhost:8080/login';

        const mockLoginData = { email: 'arunava@gmail.com', password: '12345' };
        const mockResponse = { "email": "arunava@gmail.com", "status": "200 OK" };

        const mockLoginData2 = { email: 'test@gmail.com', password: '12345' };

    
        // Make the HTTP POST request
        service.login(mockLoginData2).subscribe(
            () => {},
            (error) => {
                expect(error).toBeTruthy();
            }
        );
    
        // Expect a single request to a specific URL with the login data
        const req = httpTestingController.expectOne(URL);
        expect(req.request.method).toBe('POST');
    
        // Simulate an HTTP error response
        req.error(new ErrorEvent('Network error'));
    
        // Ensure that the observable completed
        tick();
    }));
});
