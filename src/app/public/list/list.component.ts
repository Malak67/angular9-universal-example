import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';

export interface Article {
  id: number;
  title: string;
  userId: number;
  body: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listItems: any[];
  constructor(readonly service: PublicService) { }

  ngOnInit(): void {
    this.service.getList().subscribe((res: any) => {
      console.log(res.results);
      this.listItems = res.results;
    });
  }

}
