import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EiFooterComponent } from './ei-footer.component';

describe('EiFooterComponent', () => {
  let component: EiFooterComponent;
  let fixture: ComponentFixture<EiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
