import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab8BlankPage } from './lab8-blank.page';

describe('Lab8BlankPage', () => {
  let component: Lab8BlankPage;
  let fixture: ComponentFixture<Lab8BlankPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(Lab8BlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
