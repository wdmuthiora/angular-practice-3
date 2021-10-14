import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
// HttpClient works like a service
import { HttpClient } from '@angular/common/http';
//import this service, which already has data from outside, instanciated/constructed
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService],
})
export class GoalComponent implements OnInit {
  goals!: Goal[];
  alertService!: AlertService;
  quote!: Quote;
  route!: any;

  goToUrl(id: any) {
    this.router.navigate(['/goals', id]);
  }

  toggleDetails(index: number) {
    // in this class, set this property to (oppose .showDescription)
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(index: number){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  // ### delete a goal, with prompt to user.###
  // deleteGoal(isComplete: boolean, index: number) {
  //   if (isComplete) {
  //     let toDelete = confirm(
  //       `Are you sure you want to delete ${this.goals[index].name}?`
  //     );

  //     if (toDelete) {
  //       this.goals.splice(index, 1);
  //       this.alertService.alertMe('The goal has been deleted');
  //     }
  //   }
  }

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  //Constructor is Injecting the goalService, which brings in a prebuild door, goals // from the inside/local
  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  // []is doing something similar to constructor, but it appears that it fetches from the outside.
  ngOnInit() {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    //the commented-out code below was used when the data was being requested directly, without the service.

    // this.http
    //   .get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json')
    //   .subscribe(
    //     (data) => {
    //       // Succesful API request
    //       this.quote = new Quote(data.author, data.quote);
    //     },
    //     (err) => {
    //       this.quote = new Quote('Winston Churchill', 'Never never give up!');
    //       console.log('An error occurred');
    //     }
  }
}
