import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  links = {
    'GitHub': ['https://github.com/bxkr/.ru', '../assets/github.svg'],
    'VK': ['https://vk.com/qikel', '../assets/vk.svg'],
    'last.fm': ['https://last.fm/user/blaxkr', '../assets/lastfm.svg'],
    'Steam': ['https://steamcommunity.com/id/qikel/', '../assets/steam.svg']
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
