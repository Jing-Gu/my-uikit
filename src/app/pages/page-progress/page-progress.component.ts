import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-progress',
  templateUrl: './page-progress.component.html',
  styleUrls: ['./page-progress.component.sass']
})
export class PageProgressComponent implements OnInit {

  constructor() { }

  fullcircle1 = {
    value: 3,
    max: 10,
    foregoundColor: '#00ACDE', //blue-500
    backgroundColor: '#00336A', //blue-900
    label: 'days'
  }

  fullcircle2 = {
    value: 82,
    max: 100,
    foregoundColor: '#FFC900', //yellow-500
    backgroundColor: '#936A00', //yellow-900
    label: 'sales'
  }

  fullcircle3 = {
    value: 486,
    max: 2000,
    foregoundColor: '#00D199', //green-500
    backgroundColor: '#005864', //green-900
    label: 'kcal'
  }

  thresholdConfig = {
    '0': { color: '#E8117F'}, //red-500
    '20': { color: '#FFC900'}, //yellow-500
    '50': { color: '#00ACDE'}, //blue-500
    '70': { color: '#00D199'} //green-500
  }


  ngOnInit(): void {
  }

}
