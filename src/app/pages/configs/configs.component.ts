import { HttpErrorResponse } from '@angular/common/http';
import { BottomService } from './../../service/bottom.service';
import { Bottom } from '../../shared/objects/bottom';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {

  ngOnInit(): void {
  }

}
