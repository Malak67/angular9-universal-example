import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number;
  details: any;

  constructor(private activatedRoute: ActivatedRoute, readonly service: PublicService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.service.getDetails(this.id).subscribe((res: any) => {
        console.log(res);
        this.details = res;
      });
    }
  }

}
