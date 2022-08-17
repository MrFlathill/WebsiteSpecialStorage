import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tank } from '../../shared/objects/tank';
import { Bottom } from '../../shared/objects/bottom';
import { TankFactory } from '../../shared/objects/Tank-factory';
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

  // Variables to manage Diameter input
  diameterCache: number = 0;
  diameterRead: boolean = true;

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

  // SETTERS

  setFirstValue(theValue: string) {
    this.firstValue = theValue;
  }

  setSecondValue(theValue: string) {
    this.secondValue = theValue;
  }

  setThirdValue(theValue: string) {
    this.thirdValue = theValue;
  }

  setDiameterCache(theValue: number) {
    if (this.diameterRead === true) {
      this.diameterCache = theValue;
      this.diameterRead = false
    }
  }

  // GETTERS

  getFirstValue() {
    return this.firstValue;
  }

  getSecondValue() {
    return this.secondValue;
  }

  getThirdValue() {
    return this.thirdValue;
  }

  getDiameterCache(): number {
    return this.diameterCache;
  }

  /**
   * Form Validation and CREATE Button
   */
  createNew() {
    const tk = TankFactory.empty();

    Object.assign(this.displayTank , this.tankForm.value);

    this.tankForm.reset(TankFactory.empty());

    this.thirdValue = "";
    this.secondValue = "";
    this.firstValue = "";

    this.diameterCache = 0;

  }

  /**
   * Here we calculate the Volume of a Tank with following @params
   * @param diameter
   * @param totheight
   * @returns The Volume of the Tank
   */
  getTankVolume(diameter: number, totheight: number): number {
    var bottom = this.bottoms.find((obj) => {
      return obj.bdiameter == diameter;
    });

    if (bottom) {
      // cylinder volume (-100 cause of upper space and lower space)
      var height = totheight - (2 * bottom.bheight) - 100
      var ret = Math.pow(diameter/2,2) * this.pi * height;
      // convert to Liter and round
      ret = Math.round(ret/1e6)
      // total volume with 2 bottoms and round
      ret = ret + (2 * bottom?.bvolume);
      ret = Math.round(ret);
      return ret;
    }
    return 0;
  }

  /**
   * Here we calculate the total Height of a Tank with following @params
   * @param diameter
   * @param totvolume
   * @returns The total Height of the Tank
   */
  getTankHeight(diameter: number, totvolume: number): number {
    var bottom = this.bottoms.find((obj) => {
      return obj.bdiameter == diameter;
    });

    if (bottom) {
      // volume of the Tanks Cylinder
      var volumeZyl = totvolume - (2*bottom.bvolume);
      // height of the Tank Cylinder
      var heightZyl = volumeZyl / (Math.pow(diameter/2, 2) * this.pi)
      // convert to mm and round plus adding the two bottoms and 100 for total height
      var ret = Math.round(heightZyl*1e6) + (2 * bottom.bheight) + 100;
      return ret;
    }
    return 0;
  }

  /**
   *  Here we set and calculate the Volume of a Tank with following @params
   *  We write the calculated Volume in the Tank Formular
   *  Same for setTankDiameter and setTankHeight
   * @param diameter
   * @param totheight
   */
  setTankVolume(diameter: number, totheight: number): void {
    var ret = this.getTankVolume(diameter, totheight);
    // write volume value to TankForm
    this.tankForm.get('volume')?.setValue(ret);
  }

  setTankDiameter(): void {
    if (this.diameterRead === false) {
      this.tankForm.get('diameter')?.setValue(this.getDiameterCache());
      this.setDiameterCache(0);
      this.diameterRead = true;
    }
  }

  setTankHeight(diameter: number, volume: number): void {
    var ret = this.getTankHeight(diameter, volume);
    // write height value to TankForm
    this.tankForm.get('height')?.setValue(ret);
  }

}
