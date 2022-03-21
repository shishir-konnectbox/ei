import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularGridComponent } from './tabular-grid.component';

describe('TabularGridComponent', () => {
  let component: TabularGridComponent;
  let fixture: ComponentFixture<TabularGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
