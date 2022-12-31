import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducUpdateComponent } from './produc-update.component';

describe('ProducUpdateComponent', () => {
  let component: ProducUpdateComponent;
  let fixture: ComponentFixture<ProducUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
