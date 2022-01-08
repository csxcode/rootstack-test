import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JobService } from '../../services/job.service';
import { Loader } from '@shared/utils/loader';
import { ViewComponent } from '../../components/view/view.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  filter: any = { limit: 10 };
  data: any;
  config: any;
  loader: Loader;
  locations: [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private jobService: JobService,
    private modalService: BsModalService
  ) {
    this.loader = new Loader();
  }

  ngOnInit(): void {
    this.getData();
  }

  changeConfig(data) {
    this.config = {
      itemsPerPage: data.per_page,
      currentPage: data.current_page,
      totalItems: data.total,
    };
  }

  getData(page?: number) {
    this.locations = [];
    if (this.data) {
      this.data.data = [];
    }

    this.loader.show();
    this.filter.page = page ? page : 1;
    this.jobService
      .search(this.filter)
      .then((res: any) => {
        this.changeConfig(res);
        this.data = res;
        this.locations = res.data.map((item) => {
          return {
            title: item.title,
            latitude: item.latitude,
            longitude: item.longitude,
          };
        });

        console.log(this.locations)
      })
      .finally(() => this.loader.hide());
  }

  pageChanged(e) {
    this.config.currentPage = e;
    this.getData(e);
  }

  showForm(model?: any) {
    const initialState = {
      model,
    };
    const modal = this.modalService.show(ViewComponent, {
      class: 'modal-lg modal-dialog-centered',
      backdrop: 'static',
      keyboard: false,
      initialState,
    });
  }
}
