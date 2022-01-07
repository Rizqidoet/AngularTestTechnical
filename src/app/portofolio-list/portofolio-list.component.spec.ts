import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioListComponent } from './portofolio-list.component';

describe('PortofolioListComponent', () => {
  let component: PortofolioListComponent;
  let fixture: ComponentFixture<PortofolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
