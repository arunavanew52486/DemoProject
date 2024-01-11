import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDetailsComponent } from './user-details.component';
import { UserService } from '../services/user.service';

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;
    let userService: UserService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailsComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
            providers: [UserService]
        });
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    //! TEST 1 --------------------
    it('should create user details component', () => {
        expect(component).toBeTruthy();
    });
});
