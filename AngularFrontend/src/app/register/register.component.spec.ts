import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterService } from '../services/register.service';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let registerService: RegisterService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
            providers: [RegisterService]
        });
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        registerService = TestBed.inject(RegisterService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    it('should create register component', () => {
        expect(component).toBeTruthy();
    });
});
