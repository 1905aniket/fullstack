import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforjavaComponent } from './codeforjava.component';

describe('CodeforjavaComponent', () => {
  let component: CodeforjavaComponent;
  let fixture: ComponentFixture<CodeforjavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeforjavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
