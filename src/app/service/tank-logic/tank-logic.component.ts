import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tank-logic',
  templateUrl: './tank-logic.component.html',
  styleUrls: ['./tank-logic.component.scss']
})
export class TankLogicComponent implements OnChanges {
  @Input() height: number | null = null;
  @Input() diameter: number | null = null;
  @Input() volume: number | null = null;

  @Input() firstValue: string | null = null;
  @Input() secondValue: string | null = null;
  @Input() thirdValue: string | null = null;

  @Output() newFirstValue = new EventEmitter<string>();
  @Output() newSecondEvent = new EventEmitter<string>();
  @Output() newThirdEvent = new EventEmitter<string>();

  constructor() { }


  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        switch (propName) {
          case 'height': {
            await this.doSomething("height", change.previousValue, change.currentValue);
            console.log(change.currentValue);
            break;
          }
          case 'diameter': {
            await this.doSomething("diameter", change.previousValue, change.currentValue);
            console.log(change.currentValue);
            break;
          }
          case 'volume': {
            await this.doSomething("volume", change.previousValue, change.currentValue);
            console.log(change.currentValue);
            break;
          }
        }
      }
    }
  }

  doSomething(prop: string, previous: number, current: number) {
    if (current != null && current != 0) {
    // CHANGE = HAS VALUE
      console.log("first")
      if (this.firstValue && !this.secondValue && !this.thirdValue) {
      // FIRST is set
        if (this.firstValue != prop) {
          this.setSecondValue(prop)
          console.log("Second Value: " + prop);

        }
      } else if (this.firstValue && this.secondValue && !this.thirdValue) {
      // FIRST and SECOND are set
        if (this.firstValue != prop && this.secondValue != prop) {
          this.setThirdValue(prop)
          console.log("Third Value: " + prop);
        }
      } else if (this.firstValue && this.secondValue && this.thirdValue) {
      // FIRST, SECOND and THIRD are set
      } else if (!this.firstValue && !this.secondValue && !this.thirdValue) {
      // NOTHING is set
        this.setFirstValue(prop);
        console.log("First Value: " + prop);
      } else {
      // ERROR
        console.log("fucking big error");
      }
    } else {
    // CHANGE = NO VALUE
      if (this.firstValue === prop) {
        if (this.secondValue && this.thirdValue) {
          this.setFirstValue(this.secondValue);
          this.setSecondValue(this.thirdValue);
          this.setThirdValue("");
        } else if (this.secondValue && !this.thirdValue) {
          this.setFirstValue(this.secondValue);
          this.setSecondValue("");
        } else {
          this.setFirstValue("");
        }
      } else if (this.secondValue === prop) {
        if (this.thirdValue) {
          this.setSecondValue(this.thirdValue);
          this.setThirdValue("");
        } else {
          this.setSecondValue("");
        }
      } else if (this.thirdValue === prop) {
        this.setThirdValue("");
      }
    }
  }

  setFirstValue(first: string) {
    this.newFirstValue.emit(first);
  }

  setSecondValue(second: string) {
    this.newSecondEvent.emit(second);
  }

  setThirdValue(thrid: string) {
    this.newThirdEvent.emit(thrid);
  }
}
