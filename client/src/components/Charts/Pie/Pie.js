import React, { Component } from 'react';
import Highcharts from 'highcharts';

export default class Pie extends Component {
  componentDidMount() {
    Highcharts.chart('pie-chart-container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Technologies Pie'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                'black'
            }
          }
        }
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Reactjs',
              y: 61.41,
              sliced: true,
              selected: true
            },
            {
              name: 'NodeJS',
              y: 11.84
            },
            {
              name: 'Graphql',
              y: 10.85
            },
            {
              name: 'Typescript',
              y: 4.67
            },
            {
              name: 'Redux',
              y: 4.18
            },
            {
              name: 'WebPack',
              y: 1.64
            },
            {
              name: 'CSS',
              y: 1.6
            },
            {
              name: 'QQ',
              y: 1.2
            },
            {
              name: 'Other',
              y: 2.61
            }
          ]
        }
      ]
    });
  }

  render() {
    return <div id={'pie-chart-container'} />;
  }
}
