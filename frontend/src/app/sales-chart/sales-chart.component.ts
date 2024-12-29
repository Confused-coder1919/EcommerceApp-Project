import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css'],
})
export class SalesChartComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: { text: 'Sales Overview' },
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
    series: [
      { type: 'line', data: [100, 200, 300, 400], name: 'Sales' },
    ],
  };
}
