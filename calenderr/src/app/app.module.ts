import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarDateFormatter, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarNativeDateFormatter, DateFormatterParams }from 'angular-calendar';







class CustomDateFormatter extends CalendarNativeDateFormatter {

  public override dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale,{hour:'numeric',minute:'numeric'}).format(date);
  }
public override weekViewHour({ date, locale }: DateFormatterParams): string {
  return new Intl.DateTimeFormat(locale,{hour:'numeric',minute:'numeric'}).format(date);
}

}



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],

  providers: [
  {provide:CalendarDateFormatter,useClass:CustomDateFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
