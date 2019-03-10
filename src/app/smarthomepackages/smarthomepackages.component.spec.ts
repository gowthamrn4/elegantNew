import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomePackagesComponent } from './smarthomepackages.component';

describe('SmartHomePackagesComponent', () => {
  let component: SmartHomePackagesComponent;
  let fixture: ComponentFixture<SmartHomePackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartHomePackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHomePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
