import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoyfoundComponent } from './noyfound.component';

describe('NoyfoundComponent', () => {
  let component: NoyfoundComponent;
  let fixture: ComponentFixture<NoyfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoyfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoyfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
