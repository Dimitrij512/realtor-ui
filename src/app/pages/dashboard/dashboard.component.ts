import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent{
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;

  constructor() {}}

