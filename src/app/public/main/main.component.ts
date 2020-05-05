import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isBrowser: boolean;
  constructor(readonly utilsService: UtilsService) { }

  ngOnInit(): void {
    this.isBrowser = this.utilsService.getIsBrower();
  }

}
