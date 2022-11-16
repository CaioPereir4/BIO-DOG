import { throwError , of } from 'rxjs';
import { ConsumeService } from './consume.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ConsumeService', () => {
  let service: ConsumeService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClient = jasmine.createSpyObj(['get','post']);
    service = new ConsumeService(httpClient);
  });

  //Testando se o ConsumeService foi instanciado.
  it(`#${ConsumeService.name} should be instantiated `, () => {
    expect(service).toBeDefined();
  });

  //Testando se a resposta do getBreeds não é null.
  it(`#${ConsumeService.prototype.getBreeds.name} should the response not be null`, (done) => {
    const resp = {};
    httpClient.get.and.returnValue(of(resp));

    service.getBreeds().subscribe(data =>{
      expect(data).not.toBeNull();
      done();});
    });

  //Testando um erro em getBreeds.
  it(`#${ConsumeService.prototype.getBreeds.name} should be error`, (done) => {
    httpClient.get.and.returnValue(throwError(new HttpErrorResponse({
    error:'erro'})));

    service.getBreeds().subscribe(data =>{}, error =>{
      expect(error).toBeTruthy();
      done();});
    });

  //Testando se a resposta do searchBreedImage não é null.
  it(`#${ConsumeService.prototype.searchBreedImage.name} should the response not be null`, (done) => {
    const resp = {};
    httpClient.get.and.returnValue(of(resp));

    service.searchBreedImage('1').subscribe(data =>{
      expect(data).not.toBeNull();
      done();});
    });

  //Testando um erro em searchBreedImage.
  it(`#${ConsumeService.prototype.searchBreedImage.name} should be error`, (done) => {
      httpClient.get.and.returnValue(throwError(new HttpErrorResponse({
      error:'erro'})));

      service.searchBreedImage('1').subscribe(data =>{}, error =>{
        expect(error).toBeTruthy();
        done();});
    });

  //Testando se a resposta do voteBreed não é null.
  it(`#${ConsumeService.prototype.voteBreed.name} should the response not be null`, (done) => {
      const resp = {message:'SUCESS'};
      httpClient.post.and.returnValue(of(resp));

      service.voteBreed('as2342x',0).subscribe(data =>{
        expect(data).not.toBeNull();
        done();});
      });

  //Testando um erro em voteBreed.
  it(`#${ConsumeService.prototype.voteBreed.name} should be error`, (done) => {
        httpClient.post.and.returnValue(throwError(new HttpErrorResponse({
          error:'erro'})));

        service.voteBreed('1x232s',1).subscribe(data =>{}, error =>{
          expect(error).toBeTruthy();
          done();});
      });
    });
