import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css'],
})
export class GoalDetailComponent implements OnInit {
//   ####Input() goal!: Goal;
//   these are the properties coming out of us
//   output is coming in form of a function EventEmitter
//   @Output() isComplete = new EventEmitter<boolean>();
// @Output() toDelete = new EventEmitter<boolean>();####
  goal!: any;
  // goalDelete(complete: boolean) {
  //   ## emit an event called isComplete ##
  //   this.isComplete.emit(complete);
  // }

  constructor(private route: ActivatedRoute, private service: GoalService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id);
  }
}
