import { HttpErrorResponse } from '@angular/common/http';
import { BottomService } from './../../../../service/bottom.service';
import { Bottom } from '../../../../shared/objects/bottom';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-bottoms',
  templateUrl: './list-bottoms.component.html',
  styleUrls: ['./list-bottoms.component.scss']
})
export class ListBottomsComponent implements OnInit {
    displayedColumns: string[] = ['name', 'diameter', 'height', 'volume', 'minheight', 'maxheight', 'description', 'price', ' ']

    bottoms!: Bottom[];

    error: HttpErrorResponse | null = null;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private bs: BottomService,
    ) { }

    ngOnInit(): void {
      // GET all bottoms
      this.bs.getAllBottoms('asc')
      .subscribe(
        respArr => {this.bottoms = respArr},
        respErr => {this.error = respErr}
      )
    }

    addBottom(): void {

    }

  }
