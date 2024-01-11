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
    
    //! TEST 1 ---------------------------
    it('should be created: register service', () => {
        expect(service).toBeTruthy();
    });

    //! TEST 2 ---------------------------
    it('RegisterService: should send a POST request with login data', fakeAsync(() => {
        const URL = 'http://localhost:8080/register';

        const mockLoginData = {
            "email": "test1@gmail.com",
            "password": "11111",
            "name": {
                "firstName": "Test",
                "lastName": "Test"
            },
            "gender": "MALE",
            "age": 33,
            "mobileNumber": "7777777777",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713404",
                "city": "Painta",
                "area": "Vill-Painta, PO-Painta, PS-Madhabdihi",
                "landmark": "Testing profile"
            }
        };
        const mockResponse = {
            "email": "test@gmail.com",
            "password": "11111",
            "name": {
                "firstName": "Test",
                "lastName": "Test"
            },
            "mobileNumber": "7777777777",
            "age": 33,
            "gender": "MALE",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713404",
                "city": "Painta",
                "area": "Vill-Painta, PO-Painta, PS-Madhabdihi",
                "landmark": "Testing profile"
            }
        };
    
        //! Make the HTTP POST request
        service.register(mockLoginData).subscribe((res) => {
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
        const URL = 'http://localhost:8080/register';

        const mockLoginData = {
            "email": "test1@gmail.com",
            "password": "11111",
            "name": {
                "firstName": "Test",
                "lastName": "Test"
            },
            "gender": "MALE",
            "age": 33,
            "mobileNumber": "7777777777",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713404",
                "city": "Painta",
                "area": "Vill-Painta, PO-Painta, PS-Madhabdihi",
                "landmark": "Testing profile"
            }
        };
        const mockResponse = {
            "email": "test@gmail.com",
            "password": "11111",
            "name": {
                "firstName": "Test",
                "lastName": "Test"
            },
            "mobileNumber": "7777777777",
            "age": 33,
            "gender": "MALE",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713404",
                "city": "Painta",
                "area": "Vill-Painta, PO-Painta, PS-Madhabdihi",
                "landmark": "Testing profile"
            }
        };

    
        // Make the HTTP POST request
        service.register(mockLoginData).subscribe(
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
