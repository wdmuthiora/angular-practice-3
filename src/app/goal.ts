import { NumberValueAccessor } from "@angular/forms";

export class Goal {
  
  showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    // This Goal(class), property called showDescription, set to false(value), by default for every instance of Goal (class)
    this.showDescription = false;
  }
}
