import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  //Testando se o AppComponent foi instanciado
  it(`#${AppComponent.name} should be instantiated `, () => {
    component = new AppComponent();
    expect(component).toBeDefined();
  });
});
