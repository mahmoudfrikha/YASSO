import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Amortization {
  
  montantEmprunteRestant: number;
  mensualite: number;
  remboursement: number;
  interet: number;
  montantRestantDu:number;
}
 
@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.scss']
})
export class AmortizationTableComponent implements OnInit {
  @Input() amortizationList!:Amortization[];
  amortization!:Amortization;
  ELEMENT_DATA : Amortization[]=this.amortizationList ;
  dataSource!:MatTableDataSource<Amortization>;
 /* @Input() mensuality!:number;
  @Input()interest!:number;
  @Input()months!:number;
  @Input()creditAmount!:number;*/
  displayedColumns: string[] = ['montantEmprunteRestant', 'mensualite', 'remboursement', 'interet','montantRestantDu'];
  @ViewChild('paginator') paginator!:MatPaginator
  
  constructor() { }

  ngOnInit(): void {
  }
 
 ngAfterViewInit(){
  this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  this.dataSource.paginator=this.paginator;
  console.log(this.amortizationList)
 }/*
 generateAmortizationTable(){
  this.amortization.montantEmprunteRestant=this.creditAmount;
  this.amortization.interet= this.amortization.montantEmprunteRestant*((this.interest/100)/12);
  this.amortization.remboursement=this.amortization.mensualite-this.amortization.interet;
  this.amortization.montantRestantDu=this.amortization.montantEmprunteRestant-this.amortization.remboursement
  this.amortizationList[0]=this.amortization;
  for(let i=1;i<this.months-1;i++){
    this.amortization.montantEmprunteRestant=this.amortizationList[i-1].montantRestantDu;
    this.amortization.interet= this.amortization.montantEmprunteRestant*((this.interest/100)/12);
    this.amortization.remboursement=this.amortization.mensualite-this.amortization.interet;
    this.amortization.montantRestantDu=this.amortization.montantEmprunteRestant-this.amortization.remboursement;
    this.amortizationList[i]=this.amortization;
  }
  this.ELEMENT_DATA=this.amortizationList;
  console.log(this.amortizationList);
  console.log(this.ELEMENT_DATA);
 }*/
}
