import { Component, OnInit } from '@angular/core';
import { AmortizationTableComponent } from '../amortization-table/amortization-table.component';
export class Amortization {
  constructor(){};
  montantEmprunteRestant!: number;
  mensualite!: number;
  remboursement!: number;
  interet!: number;
  montantRestantDu!:number;
}
@Component({
  selector: 'app-professional-credit-simulation-card',
  templateUrl: './professional-credit-simulation-card.component.html',
  styleUrls: ['./professional-credit-simulation-card.component.scss']
})
export class ProfessionalCreditSimulationCardComponent implements OnInit {
  tableIsClicked:boolean=false;
  amortizationList:Amortization[]=[];
  amortization:Amortization=new Amortization();
  //simulatorClicked !:number;
  fraisCautionnement:number=0;
  monthlyInsurance :number=0;
  insurance :number=0;
  mensuality :number=0;
  interest:number=0;
  months:number=0;
  creditAmount:number=0;
    constructor() { }
  
    ngOnInit(): void {
    }
    TableIsClicked(){
      this.tableIsClicked=true;
    }
    euroLabel(value: number) {
      return value + '€';
    }
    percentLabel(value:number){
      return value  +'%';
    }
    updateFraisCautionnement(event:any){
      
    }
  updateInsurance(event:any){
    var m;
  this.insurance=event.value;
  this.monthlyInsurance=((this.insurance/100)*this.creditAmount)/12;
    m=this.calculateMensuality(this.interest,this.months,this.creditAmount);
    m+=this.monthlyInsurance
    this.mensuality=m;
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
    tauxAnnuel=(tauxAnnuel/100)/12;
    return mensuality=capital*(tauxAnnuel/(1-Math.pow(1+tauxAnnuel,-mois)));
  }
  generateAmortizationTable(){
    this.amortization.montantEmprunteRestant=this.creditAmount;
   
    this.amortization.interet= this.amortization.montantEmprunteRestant*((this.interest/100)/12);
    this.amortization.remboursement=this.amortization.mensualite-this.amortization.interet;
    this.amortization.montantRestantDu=this.amortization.montantEmprunteRestant-this.amortization.remboursement
    this.amortizationList[0]=this.amortization;
    console.log("loula" +this.amortization.mensualite);
    for(let i=1;i<this.months-1;i++){
      this.amortization.montantEmprunteRestant=this.amortizationList[i-1].montantRestantDu;
      this.amortization.interet= this.amortization.montantEmprunteRestant*((this.interest/100)/12);
      this.amortization.remboursement=this.amortization.mensualite-this.amortization.interet;
      this.amortization.montantRestantDu=this.amortization.montantEmprunteRestant-this.amortization.remboursement;
      this.amortizationList[i]=this.amortization;
    }
    console.log("thenya"+this.amortization);
    console.log(this.amortizationList);
   return this.amortizationList;
   }
  }