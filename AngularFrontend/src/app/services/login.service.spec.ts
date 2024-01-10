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
    
    it('should be created: login service', () => {
        expect(service).toBeTruthy();
    });
    
    // it('should send a POST request with login data', fakeAsync(() => {
    //     const mockLoginData = { username: 'testuser', password: 'testpassword' };
    //     const mockResponse = { success: true, token: 'mockToken' };
    
    //     // Make the HTTP POST request
    //     service.login(mockLoginData).subscribe((response) => {
    //     expect(response).toEqual(mockResponse);
    //     });
    
    //     // Expect a single request to a specific URL with the login data
    //     const req = httpTestingController.expectOne('your-login-url');
    //     expect(req.request.method).toBe('POST');
    //     expect(req.request.body).toEqual(mockLoginData);
    
    //     // Simulate a successful HTTP response
    //     req.flush(mockResponse);
    
    //     // Ensure that the observable completed
    //     tick();
    // }));
    
    // it('should handle HTTP errors', fakeAsync(() => {
    //     const mockLoginData = { username: 'testuser', password: 'testpassword' };
    
    //     // Make the HTTP POST request
    //     service.login(mockLoginData).subscribe(
    //     () => {},
    //     (error) => {
    //         expect(error).toBeTruthy();
    //     }
    //     );
    
    //     // Expect a single request to a specific URL with the login data
    //     const req = httpTestingController.expectOne('your-login-url');
    //     expect(req.request.method).toBe('POST');
    
    //     // Simulate an HTTP error response
    //     req.error(new ErrorEvent('Network error'));
    
    //     // Ensure that the observable completed
    //     tick();
    // }));
});
