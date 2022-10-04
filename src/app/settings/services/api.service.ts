import { Injectable } from '@angular/core';
import {IArticles} from "../interfaces/iarticles";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public articls: IArticles[]
  constructor(private http:HttpClient) {
    this.articls =  [
      {
        author: 'Администратор',
        title: 'angular blog',
        description: 'about angular',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem',
        img: '../../assets/img/1.jpg',
        favorite: false
      },

      {
        author: 'Администратор',
        title: 'Спортивное питание',
        description: 'рецепты блюд для спорта',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem',
        img: '../../assets/img/2.jpg',
        favorite: false
      },
      {
        author: 'Пользователь',
        title: 'правельное питание',
        description: 'рецепты блюд для правилшьного питания',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/3.jpg',
        favorite: false
      },
      {
        author: 'Администратор',
        title: 'angular',
        description: 'учебное пособие',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/4.jpg',
        favorite: false
      },
      {
        author: 'Администратор',
        title: 'angular blog',
        description: 'about angular',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/5.jpg',
        favorite: false
      },
      {
        author: 'Администратор',
        title: 'Спортивное питание',
        description: 'рецепты блюд для спорта',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/6.jpg',
        favorite: false
      },
      {
        author: 'Пользователь',
        title: 'правельное питание',
        description: 'рецепты блюд для правилшьного питания',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/7.jpg',
        favorite: false
      },
      {
        author: 'Администратор',
        title: 'angular',
        description: 'учебное пособие',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptateLorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti et fugit omnis possimus sed voluptatibus.\n' +
          '    Consequatur, debitis distinctio, est exercitationem iste labore laborum libero magni porro similique tempore,\n' +
          '    voluptate',
        img: '../../assets/img/8.jpg',
        favorite: false
      }
    ]
  }

  getAllArticls(){
    return this.articls;
  }

}
