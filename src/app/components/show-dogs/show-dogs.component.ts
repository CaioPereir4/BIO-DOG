import { ConsumeService } from '../../shared/services/consume.service';
import { Component, OnInit } from '@angular/core';
import { DogBreed } from 'src/app/models/model.dog-breed';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css'],
})
export class ShowDogsComponent implements OnInit {
  constructor(private consume: ConsumeService) {}

  objectBreeds: any;

  dog: DogBreed = { id: '', image: '', imageId: '' };

  //Varíavel que controla se uma imagem já foi votada.
  wasVoted: Boolean = false;

  public ngOnInit(): void {
    this.searchBreeds();
  }

  public searchBreeds(): void {
    this.consume.getBreeds().subscribe(
      (data) => {

        // Consumindo o Service e alimentando o objectBreeds
        this.objectBreeds = data;
      },
      (e) => {
        alert(e);}
    );}

  /* Função chamada automaticamente quando há uma mudança (NgModelChange) no select do html.*/
  public searchImageDog() {

    /*O ngModel atribuiu o dog.id de acordo com a seleção da raça no select.*/
    this.consume.searchBreedImage(this.dog.id).subscribe(
      (data) => {
        this.wasVoted = false;

        /*Link da imagem que é utilizado no HTML,
         ele é atribuido com o .url do objeto que foi trazido na busca da imagem.*/
        this.dog.image = data[0].url;

        // Atribui o imageId que é utilizado para votação.
        this.dog.imageId = data[0].id;
      },
      (e) => {
        alert(e);}
    );}

  // Função que chama o service para realizar a votação.
  public vote(idImage: string, rating: number): void {

    this.consume.voteBreed(idImage, rating).subscribe(
      (data) => {

        // Verificando se à votação foi realizada com sucesso.
        if ((data.message = 'SUCESS')) {
          this.wasVoted = true;
        }
      },
      (e) => {
        alert(e);}
    );}
}
