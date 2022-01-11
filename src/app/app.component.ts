import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

interface Switch {
  icon: string,
  alt: string,
  template?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private http: HttpClient) {}
  links = {
    'GitHub': ['https://github.com/bxkr/.org', '../assets/github.svg'],
    'VK': ['https://vk.com/qikel', '../assets/vk.svg'],
    'last.fm': ['https://last.fm/user/blaxkr', '../assets/lastfm.svg'],
    'Steam': ['https://steamcommunity.com/id/qikel/', '../assets/steam.svg']
  }
  switches: Switch[] = [
    {
      icon: 'landscape',
      alt: 'Главная'
    },
    {
      icon: 'info',
      alt: 'Обо мне',
      template: 'info.html'
    },
    {
      icon: 'category',
      alt: 'Портфолио',
      template: 'portfolio.html'
    }
  ]
  showCard = false;
  cardContent = String();

  changeCard(template: string): void {
    this.showCard = true;
    this.http.get(`assets/templates/${template}`, {responseType: 'text'}).subscribe(v => {
      this.cardContent = v
    })
  }

  openDialog(): void {
    this.dialog.open(BackgroundPhotoDialog)
  }
}

@Component({
  selector: 'photo-dialog',
  templateUrl: 'dialogs/photo.html',
})
export class BackgroundPhotoDialog {
  constructor(public snackBar: MatSnackBar) {}
  copied(): void {
    this.snackBar.open('Скопировано в буфер обмена!', undefined, {
      duration: 3000
    })
  }
}
