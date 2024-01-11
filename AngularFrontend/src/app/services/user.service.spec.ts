import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService],
        });
        service = TestBed.inject(UserService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no outstanding requests
        httpTestingController.verify();
    });

    //! TEST 1 ---------------------------------------------------------
    it('should be created: login service', () => {
        expect(service).toBeTruthy();
    });

    //! TEST 2 ---------------------------------------------------------
    it('LoginService: should send a GET request with email and return data', fakeAsync(() => {
        const URL = 'http://localhost:8080/getuser';

        const mockLoginData = 'arunava@gmail.com'
        const mockResponse = {
            "email": "arunava@gmail.com",
            "password": "12345",
            "name": {
                "firstName": "Arunvav",
                "lastName": "Das"
            },
            "mobileNumber": "8250993866",
            "age": 23,
            "gender": "MALE",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713466",
                "city": "Purba Bardhaman",
                "area": "Vill - Painta, P.O.: Painta, PS:- Madhabdihi",
                "landmark": "Near High School"
            }
        };
    
        //! Make the HTTP POST request
        service.getUserByEmail(mockLoginData).subscribe((res) => {
            expect(res).toEqual(mockResponse);
        });
    
        //! Expect a single request to a specific URL with the login data
        const req = httpTestingController.expectOne(`${URL}/${mockLoginData}`);
        expect(req.request.method).toBe('GET');
    
        //! Simulate a successful HTTP response
        req.flush(mockResponse);
    
        //! Ensure that the observable completed
        tick();
    }));

    //! TEST 3 ---------------------------------------------------------
    it('LoginService: should handle HTTP errors', fakeAsync(() => {
        const URL = 'http://localhost:8080/getuser';

        const mockLoginData = 'arunava@gmail.com'
        const mockResponse = {
            "email": "arunava@gmail.com",
            "password": "12345",
            "name": {
                "firstName": "Arunvav",
                "lastName": "Das"
            },
            "mobileNumber": "8250993866",
            "age": 23,
            "gender": "MALE",
            "address": {
                "country": "India",
                "state": "West Bengal",
                "pin": "713466",
                "city": "Purba Bardhaman",
                "area": "Vill - Painta, P.O.: Painta, PS:- Madhabdihi",
                "landmark": "Near High School"
            }
        };
    
        //! Make the HTTP POST request
        service.getUserByEmail(mockLoginData).subscribe(
            () => {},
            (error) => {
                expect(error).toBeTruthy();
            }
        );
    
        //! Expect a single request to a specific URL with the login data
        const req = httpTestingController.expectOne(`${URL}/${mockLoginData}`);
        expect(req.request.method).toBe('GET');
    
        //! Simulate an HTTP error response
        req.error(new ErrorEvent('Network error'));
    
        //! Ensure that the observable completed
        tick();
    }));
});
