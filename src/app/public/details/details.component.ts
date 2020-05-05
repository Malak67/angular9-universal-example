import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../services/public.service';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../appStore/app.store';
import { Observable } from 'rxjs';
import { GetMovieDetails } from '../../appStore/app.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number;

  @Select(AppState.selectedMovie) selectedMovie$: Observable<any[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.store.dispatch(new GetMovieDetails(this.id));
    }
  }

}
