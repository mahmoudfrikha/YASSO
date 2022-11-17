import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-simulation',
  templateUrl: './credit-simulation.component.html',
  styleUrls: ['./credit-simulation.component.scss']
})
export class CreditSimulationComponent implements OnInit {
simulatorClicked !:number;
mensuality !:number;
interest!:number;
months!:number;
creditAmount!:number;
  constructor() { }

  ngOnInit(): void {
  }
  euroLabel(value: number) {
    return value + ' €';
  }
  percentLabel(value:number){
    return value  +' %';
  }
  isProfessional(){
  this.simulatorClicked=0;
}
isImmobilier(){
  this.simulatorClicked=1;
}
isConsommation(){
  this.simulatorClicked=2;
}
updateInterest(event:any){
this.interest=event.value;
this.mensuality=this.calculateMensuality(this.interest,this.months,this.creditAmount);
}
updateMonths(event:any){
this.months=event.value;
this.mensuality=this.calculateMensuality(this.interest,this.months,this.creditAmount);
}
updateCreditAmount(event:any){
this.creditAmount=event.value;
this.mensuality=this.calculateMensuality(this.interest,this.months,this.creditAmount);
}
calculateMensuality(tauxAnnuel:number,mois:number,capital:number){
  var mensuality;
  tauxAnnuel=tauxAnnuel/12;
  return mensuality=capital*(tauxAnnuel/(1-Math.pow(1+tauxAnnuel,-mois)));
}
}
