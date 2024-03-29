import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WishlistListComponent } from './wishlist-list.component';

describe('WishlistListComponent', () => {
  let component: WishlistListComponent;
  let fixture: ComponentFixture<WishlistListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
