import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Tank } from '../../shared/tank';
import { Bottom } from '../../shared/bottom';
import { TankFactory } from '../../shared/Tank-factory';
import { BottomService } from '../../service/bottom.service';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  id! : string;
  displayTank: Tank = TankFactory.empty();
  tankForm!: FormGroup;
  booleanInsulation?: boolean;
  pi = 3.14159265359;

  tank : Tank | null = null;
  bottoms!: Bottom[];
  bottom: Bottom | null = null;
  response: HttpResponse<any> | null = null;
  error: HttpErrorResponse | null = null;

  firstValue: string = "";
  secondValue: string = "";
  thirdValue: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bs: BottomService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async response => {
      if (response['id']) {
        console.log("with ID");

        this.tank = TankFactory.empty();
        this.tankForm = this.fb.group({
          name: [this.tank.tname, Validators.required],
          volume: [this.tank.tvolume, Validators.required],
          height: [this.tank.theight, Validators.required],
          diameter: [this.tank.tdiameter, Validators.required],
          insulation: [this.tank.tinsulation],
          description: [this.tank.tdescription],
        });

        // GET all bottoms
        this.bs.getAllBottoms('asc')
          .subscribe(
            respArr => {this.bottoms = respArr},
            respErr => {this.error = respErr}
          )
        console.log(this.bottoms);
      } else {
        console.log("no ID");
        this.tank = TankFactory.empty();
        this.tankForm = this.fb.group({
          name: [this.tank.tname, Validators.required],
          volume: [this.tank.tvolume, Validators.required],
          height: [this.tank.theight, Validators.required],
          diameter: [this.tank.tdiameter, Validators.required],
          insulation: [this.tank.tinsulation],
          description: [this.tank.tdescription],
        });

        // GET all bottoms
        this.bs.getAllBottoms('asc')
          .subscribe(
            respArr => {this.bottoms = respArr},
            respErr => {this.error = respErr}
          )
      }

    });
  }

  setFirstValue(theValue: string) {
    this.firstValue = theValue;
  }

  setSecondValue(theValue: string) {
    this.secondValue = theValue;
  }

  setThirdValue(theValue: string) {
    this.thirdValue = theValue;
  }

  getFirstValue() {
    return this.firstValue;
  }

  getSecondValue() {
    return this.secondValue;
  }

  getThirdValue() {
    return this.thirdValue;
  }

  createNew() {
    const tk = TankFactory.empty();

    Object.assign(this.displayTank , this.tankForm.value);

    this.tankForm.reset(TankFactory.empty());
  }

  assignTankObject(tank: Tank) {
  }

  getTankVolume(diameter: number, height: number, bottomVolume: number): number {
    // cylinder volume
    var ret = Math.pow(diameter/2,2) * this.pi * height;
    // total volume with 2 bottoms
    ret = ret + (2 * bottomVolume);
    // konverto to Liter and round
    ret = Math.round(ret/1e6)
    return ret;
  }

}
