import { Component, HostListener } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.scss'],
})
export class Sec3Component {
  public isMobileSmall = false;
  public slides = [
    {
      id: 1,
      img: './assets/images/Ellipse 21.png',
      user: 'Константинов Михаил Павлович',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    },
    {
      id: 2,
      img: './assets/images/Ellipse 21 (1).png',
      user: 'Иван Иванов',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 3,
      img: './assets/images/Ellipse 21 (2).png',
      user: 'Артем Корнилов',
      city: 'Самара',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },

    {
      id: 4,
      img: './assets/images/Ellipse 21 (1).png',
      user: 'Иван Иванов',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 5,
      img: './assets/images/Ellipse 21 (2).png',
      user: 'Артем Корнилов',
      city: 'Самара',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
    {
      id: 6,
      img: './assets/images/Ellipse 21.png',
      user: 'Константинов Михаил Павлович',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    },
  ];

  ngOnInit() {
    this.checkScreenWidth();
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      navigation: true,
      pagination: true,
      breakpoints: {
        1300: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    };
    Object.assign(swiperEl!, swiperParams);
    swiperEl!.initialize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.isMobileSmall = window.innerWidth <= 425;
  }
}
