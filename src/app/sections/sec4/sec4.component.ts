import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sec4',
  templateUrl: './sec4.component.html',
  styleUrls: ['./sec4.component.scss']
})
export class Sec4Component {
  public isMobileSmall = false;
  public dataAccordion = [
    {
      title:
        'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
      content: '',
      extand: false,
    },
    {
      title: 'Прототип нового сервиса - это как трубный призыв?',
      content: '',
      extand: false,
    },
    {
      title: 'Частокол на границе продолжает удивлять?',
      content:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
      extand: true,
    },
    {
      title: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
      content: '',
      extand: false,
    },
    {
      title:
        'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
      content: '',
      extand: false,
    },
    {
      title:
        'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
      content: '',
      extand: false,
    },
    {
      title: 'Высококачественный прототип будущего проекта обнадёживает?',
      content: '',
      extand: false,
    },
  ];

  ngOnInit() {
    this.checkScreenWidth();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.isMobileSmall = window.innerWidth <= 425;
  }
}
