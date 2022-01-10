import { Chart, registerables } from 'chart.js';
import Component from '@glimmer/component';

Chart.register(...registerables);

export default class ChartsSubcategoryAnnualReportComponent extends Component {
  chart = null;

  createChart(element, [annualReport, self]) {
    if (annualReport) {
      self.chart = new Chart(element, {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Budget',
            data: [
              annualReport.janBudget,
              annualReport.febBudget,
              annualReport.marBudget,
              annualReport.aprBudget,
              annualReport.mayBudget,
              annualReport.junBudget,
              annualReport.julBudget,
              annualReport.augBudget,
              annualReport.sepBudget,
              annualReport.octBudget,
              annualReport.novBudget,
              annualReport.decBudget,
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
          }, {
            label: 'Actual',
            data: [
              annualReport.janActual,
              annualReport.febActual,
              annualReport.marActual,
              annualReport.aprActual,
              annualReport.mayActual,
              annualReport.junActual,
              annualReport.julActual,
              annualReport.augActual,
              annualReport.sepActual,
              annualReport.octActual,
              annualReport.novActual,
              annualReport.decActual,
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          }],
        },
        options: {
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: annualReport.year,
            },
          },
          responsive: true,
        },
        type: 'line',
      });
    }
  }

  updateChart(element, [annualReport, self]) {
    if (self.chart) {
      self.chart.options.plugins.title.text = annualReport.year;
      self.chart.data.datasets.forEach((dataset) => {
        if (dataset.label === 'Budget') {
          dataset.data = [
            annualReport.janBudget,
            annualReport.febBudget,
            annualReport.marBudget,
            annualReport.aprBudget,
            annualReport.mayBudget,
            annualReport.junBudget,
            annualReport.julBudget,
            annualReport.augBudget,
            annualReport.sepBudget,
            annualReport.octBudget,
            annualReport.novBudget,
            annualReport.decBudget,
          ];
        } else if (dataset.label === 'Actual') {
          dataset.data = [
            annualReport.janActual,
            annualReport.febActual,
            annualReport.marActual,
            annualReport.aprActual,
            annualReport.mayActual,
            annualReport.junActual,
            annualReport.julActual,
            annualReport.augActual,
            annualReport.sepActual,
            annualReport.octActual,
            annualReport.novActual,
            annualReport.decActual,
          ];
        }
      });
      self.chart.update();
    }
  }
}
