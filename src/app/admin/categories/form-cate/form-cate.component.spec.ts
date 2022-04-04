import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCateComponent } from './form-cate.component';

describe('FormCateComponent', () => {
  let component: FormCateComponent;
  let fixture: ComponentFixture<FormCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
