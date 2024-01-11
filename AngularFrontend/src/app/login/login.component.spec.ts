import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let loginService: LoginService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
            providers: [LoginService]
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        loginService = TestBed.inject(LoginService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    //! TEST 1 ---------------------
    it('it should create login component', () => {
        expect(component).toBeTruthy();
    });
});
