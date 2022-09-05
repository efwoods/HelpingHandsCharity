import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pdf';
  pdfSource  = "https://github.com/efwoods/HelpingHandsCharity/blob/9f5baba69574ce8cbfc2700c6b747071567431bd/Quick%20Reference%20for%20Helping%20Hands%20Charity.pdf";
}
