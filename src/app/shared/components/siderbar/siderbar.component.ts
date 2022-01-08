import { Component, OnInit } from '@angular/core';
import { Utils } from '@shared/utils/utils';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  modules: any[] = [];
  selectedMenu: any;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.modules = [
      {
          code: "JOB",
          name: "Jobs",
          url: '/jobs',
          icon: 'mdi-map-marker-radius',
          order: 1,
          has_child: false,
      }
    ];
  }

  toggle(e) {
    const li = e.target.parentNode;
    Utils.toggleClass(li, 'mm-active');
    Utils.toggleClass(li.lastElementChild, 'mm-show');
  }
}
