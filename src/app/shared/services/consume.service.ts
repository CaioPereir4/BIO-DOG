import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, throwError } from 'rxjs';
import { DogBreed } from '../../models/model.dog-breed';
import { apiTheDog } from 'src/assets/url/url.config';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {
  constructor(private httpClient: HttpClient) {}

  public objectError = {
    msgApi: 'Erro ao executar The Dog Api!',
    msgImagem: 'Erro ao pesquizar a imagem!',
    msgVote: 'Erro ao tentar realizar votação',
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  //Definido meu requestOptions que é utilizado em voteBreed
  requestOptions = { headers: this.headers };

  //Função que busca as raças e fornece a resposta em formato JSON
  public getBreeds(): Observable<DogBreed[]> {

    return this.httpClient.get<DogBreed[]>(apiTheDog.urlBreeds)
    .pipe(catchError((err) => throwError(this.objectError.msgApi))); // Tratando em caso de erro
  }

  //Função responsável por buscar informações da imagem, recebendo o parâmetro id que é único para cada raça.
  public searchBreedImage(id: string): Observable<any> {

    return this.httpClient.get<any>(apiTheDog.urlImageBreeds + id)
    .pipe(catchError((err) => throwError(this.objectError.msgImagem)));
  }

  /*Função que realiza a votação utilizando o método Http Post.
  Necessita do id da imagem, e o rate que seria 0 para não gostei, e 1 para gostei.*/
  public voteBreed(idImage: string, rate: number): Observable<any> {

    var body: object = { image_id: idImage, value: rate };

    return this.httpClient.post<any>(apiTheDog.urlVote, body, this.requestOptions)
    .pipe(catchError((err) => throwError(this.objectError.msgVote)));
  }
}
