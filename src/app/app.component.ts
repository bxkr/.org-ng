import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = {
    'GitHub': 'https://github.com/bxkr',
    'VK': 'https://vk.com/qikel',
    'last.fm': 'https://last.fm/user/blaxkr',
    'Steam': 'https://steamcommunity.com/id/qikel/'
  }
}
