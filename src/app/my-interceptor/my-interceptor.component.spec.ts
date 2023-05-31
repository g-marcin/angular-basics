import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterceptorComponent } from './my-interceptor.component';

describe('MyInterceptorComponent', () => {
  let component: MyInterceptorComponent;
  let fixture: ComponentFixture<MyInterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInterceptorComponent]
    });
    fixture = TestBed.createComponent(MyInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
