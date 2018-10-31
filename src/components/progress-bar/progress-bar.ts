import {Component, Input, OnChanges, OnInit} from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input()
  total: any;//总数

  @Input()
  amount: any;//使用数

  length: any = {};//颜色长度

  proportion: any;//比例值

  constructor() {
    this.length = {
      'width': '0%',
      'transition': 'width 1s',
      '-webkit-transition': 'width 1s'
    }
  }

  ngOnInit() {
    this.setData();
  }

  /**
   * 设置数据
   */
  setData() {
    this.proportion = Math.round(this.amount / this.total * 100);
    if (this.proportion) {
      this.proportion += '%';
    } else {
      this.proportion = '0%';
    }
    setTimeout(() => {
      this.length.width = this.proportion;
    }, 200);//设置延迟，让动画动起来
  }

  /**
   * 数据变化
   */
  ngOnChanges() {
    //重新更新数据
    this.setData();
  }

}
