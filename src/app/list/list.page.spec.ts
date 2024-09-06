import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonCard, IonicModule, IonItem } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ListPage } from './list.page';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;
  let service: ApiService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be equal to', () => {
  //   let arr = [1,2,3,4,5];
  //   component.todos = arr;

  //   fixture.detectChanges()
  //   const el = fixture.debugElement.query(By.directive(IonCard));
  //   expect(el).toBeNull();
  //   //expect(el.nativeElement.textContent.trim()).toBe('No todos found');

  //   const item = fixture.debugElement.queryAll(By.directive(IonItem));
  //   expect(item.length).toBe(5);
  // });

  it('should load async todos', (done) => {
    const arr = [1, 2, 3, 4, 5];
    const spy = spyOn(service, 'getStoredTodos').and.returnValue(
      Promise.resolve(arr)
    );
    component.loadStorageTodos();

    spy.calls.mostRecent().returnValue.then(() => {
      expect(component.todos).toBe(arr);
      done();
    });
  });
 
  
  // it('waitForAsync should load async todos', waitForAsync(() => {
  //   const arr: any = [1, 2, 3];
  //   const spy = spyOn(service, 'getStoredTodos').and.returnValue(
  //     Promise.resolve(arr)
  //   );
  //   component.loadStorageTodos();

  //   fixture.whenStable().then(() => {
  //     expect(component.todos).toBe(arr);
  //   });
  // }));

  it('fakeAsync should load async todos', fakeAsync(() => {
    const arr = [1, 2];
    const spy = spyOn(service, 'getStoredTodos').and.returnValue(
      Promise.resolve(arr)
    );
    component.loadStorageTodos();
    tick();
    expect(component.todos).toBe(arr);
  }));
});
