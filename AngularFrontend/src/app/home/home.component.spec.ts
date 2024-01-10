import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { UserService } from '../services/user.service';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let userService: UserService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
            providers: [UserService]
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    it('should create home component', () => {
        expect(component).toBeTruthy();
    });
});
