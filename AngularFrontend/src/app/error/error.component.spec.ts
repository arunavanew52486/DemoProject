import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent]
        });
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //! TEST 1 ---------------------------
    it('should create error component', () => {
        expect(component).toBeTruthy();
    });

    //! TEST 2 ---------------------------
    it(`should show the error message as 'Page Not Found'`, () => {
        expect(component.errorMessage).toEqual('Page Not Found');
    });
});
