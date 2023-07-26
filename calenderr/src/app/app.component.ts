import { Component } from '@angular/core';
import { CalendarEvent, CalendarNativeDateFormatter, CalendarView, CalendarViewPeriod, DateFormatterParams } from 'angular-calendar';
import { CalendarPreviousViewDirective } from 'angular-calendar/modules/common/calendar-previous-view.directive';
import { isSameDay,isSameMonth} from 'date-fns';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Subject } from 'rxjs';

registerLocaleData(localeFr,'Fr');





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;
  refresh=new Subject<void>()
  constructor() {
    const event1 = {
      title: "conge payé",
      start: new Date("2023-07-26"),
      end: new Date("2023-07-27" ),
      draggable:true,
      resizable: {
   beforeStart: true,
afterEnd: false,
      }

    }

 

    this.events.push(event1);


  }

  setView(view: CalendarView) {
    this.view = view;
  }
  dayClicked ({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date,this.viewDate)) {
      if

        (isSameMonth( this.viewDate, date ) && this.activeDayIsOpen ===true || events.length ===0
      )
      {this.activeDayIsOpen=false;
      }else {

        this.activeDayIsOpen=true;
      }
      this.viewDate=date;


    }  
  }
enventClicked(event:any){

  console.log(event);
}







eventTimesChanged(event:any){
  event.event.start=event.newStart;
  event.event.end=event.newEnd;
  this.refresh.next();
}
 

}
