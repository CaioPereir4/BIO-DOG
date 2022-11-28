import { ConsumeService } from '../../shared/services/consume.service';
import { ShowDogsComponent } from './show-dogs.component';
import {of, throwError} from 'rxjs'
describe('ShowDogsComponent', () => {
  let component: ShowDogsComponent;
  let service: jasmine.SpyObj<ConsumeService>;

  beforeEach(() => {

    service = jasmine.createSpyObj(['getBreeds' , 'searchBreedImage','voteBreed']);
    component = new ShowDogsComponent(service);
  });

  //Testando se o ShowDogsComponent foi instanciado.
  it(`#${ShowDogsComponent.name} should be instantiated `, () => {
    expect(component).toBeDefined();
  });

  //Testando se o ngOninit está funcionando corretamente.
  it(`#${ShowDogsComponent.prototype.searchBreeds.name} test ngOnInit with sucess`,()=>{

    service.getBreeds.and.returnValue(of([]));
    component.ngOnInit();
    expect(component.objectBreeds.length).toEqual(0);
  });

  //Testando um erro em searchBreeds.
  it(`#${ShowDogsComponent.prototype.searchBreeds.name} test ngOnInit with error`,()=>{

    service.getBreeds.and.returnValue(throwError(({
      error:'erro'
    })));
    component.ngOnInit();
    expect(component.searchBreeds).toThrowError();
  });

  //Testando se a função searchImageDog está funcionando corretamente.
  it(`#${ShowDogsComponent.prototype.searchImageDog.name} test sucess`,()=>{

    service.searchBreedImage.and.returnValue(of([
     {
        "url" : "",
        "id" : 2
      }
    ]));
    component.searchImageDog();
    expect(component.searchImageDog).toBeDefined();
  });

  //Testando um erro em searchImageDog.
  it(`#${ShowDogsComponent.prototype.searchImageDog.name} test error`,()=>{

    service.searchBreedImage.and.returnValue(throwError(({
      error:'erro'
    })));
    component.searchImageDog();
    expect(component.searchImageDog).toThrowError();
  });

  //Testando se a função vote está funcionando corretamente.
  it(`#${ShowDogsComponent.prototype.vote.name} test sucess`,()=>{

    service.voteBreed.and.returnValue(of([
      {
       "message":"SUCESS"
      }
    ]));
    component.vote('2fa2x2d2',1);
    expect(component.wasVoted).toEqual(true);
  });

  //Testando um erro em searchImageDog.
  it(`#${ShowDogsComponent.prototype.vote.name} test error`,()=>{

    service.voteBreed.and.returnValue(throwError(({
      error:'erro'
    })));


    component.vote('23x232',0);
    expect(component.searchImageDog).toThrowError();
  });
});
