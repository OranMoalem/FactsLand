import { FactsService } from './../../services/facts.service';
import { FactModel } from './../../models/fact.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
    public fact : FactModel;
    public pathUrl : string;
  constructor(private activatedRouter:ActivatedRoute,
                private factsService : FactsService) { }
   

  async ngOnInit() {
    this.pathUrl = this.activatedRouter.snapshot.params.pathUrl;
     try {
      this.fact = await this.factsService.getFactsAsync("http://numbersapi.com/random/"+this.pathUrl+"?json");
   
    }
     catch(err) {
         console.log(err.message);
     }
    }



}
