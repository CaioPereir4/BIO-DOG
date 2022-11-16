import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;

  //Testando se o AboutComponent foi instanciado.
  it(`#${AboutComponent.name} should be instantiated `, () => {
    component = new AboutComponent();
    component.ngOnInit();
    expect(component).toBeDefined();

  });
});
