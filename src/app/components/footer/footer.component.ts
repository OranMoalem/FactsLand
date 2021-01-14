import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


    public currentYear:number;

  ngOnInit(): void {
      this.currentYear=new Date().getFullYear();
  }

}