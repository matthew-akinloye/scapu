import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels'; // Correct import

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  @ViewChild('pieChart') pieChartRef: any;
  private pieChart: any;

  constructor() {
    Chart.register(...registerables, DatalabelsPlugin); // Register the plugin
  }

  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = this.pieChartRef.nativeElement.getContext('2d'); 
    this.pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Like', 'Dislike', 'Undecided'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['#2aadd6', 'red', 'grey'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: 'white', // Label text color
            font: {
              size: 14, // Label font size
              weight: 'bold' // Label font weight
            },
            formatter: (value: number, context: any) => {
              // Calculate the percentage
              const total = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1) + '%';
              // Return the label, value, and percentage
              return `${context.chart.data.labels[context.dataIndex]}\n${value} (${percentage})`;
            }
          },
          legend: {
            display: false // Hide the default legend
          }
        },
        onClick: (event: any, elements: any) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            this.highlightQuadrant(index);
          }
        }
      }
    });
  }

  highlightQuadrant(index: number) {
    // Reset all quadrants to their original size
    this.pieChart.data.datasets[0].borderWidth = 0;

    // Highlight the selected quadrant by increasing its border width
    this.pieChart.data.datasets[0].borderWidth = (i: number) => (i === index ? 5 : 0);
    this.pieChart.update();

    // Optional: Display a message or perform an action
    const label = this.pieChart.data.labels[index];
    const value = this.pieChart.data.datasets[0].data[index];
    console.log(`Clicked on ${label}: ${value}%`);
  }

  hotTopics = [
    '#ClimateChange',
    '#Technology',
    '#AIRevolution',
    '#CryptoNews',
    '#SportsUpdates',
  ];
}