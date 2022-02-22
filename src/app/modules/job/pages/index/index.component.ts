import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JobService } from '../../services/job.service';
import { Loader } from '@shared/utils/loader';
import { ViewComponent } from '../../components/view/view.component';
import { Utils } from '../../../../shared/utils/utils';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loader: Loader;
  data: any[];

  filter: any = {
    page: 1,
    limit: 12,
    id: null,
    search: null
  };
  pagination: any = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: 0,
      totalPages: 0,
  };

  constructor(
    private jobService: JobService,
    private modalService: BsModalService
  ) {
    this.loader = new Loader();
  }

  ngOnInit() {
    this.getData();
  }

  getData(page?: number) {
    this.data = [];

    this.filter = Utils.removeEmpty(this.filter);
    this.filter.page = page ? page : 1;
    this.loader.show();

    this.jobService.search(this.filter).then(
      (response: any) => {
        let {items, meta} = response.data;

        this.data = items;
        this.setMetaPagination(meta);
        this.loader.hide()
      },
      (err) => {
        this.loader.hide()
      }
    );
  }

  setMetaPagination(meta) {
    this.pagination = {
      itemsPerPage: meta.items_per_page,
      currentPage: meta.current_page,
      totalItems: meta.total_items,
      totalPages: meta.total_pages,
    };
  }

  pageChanged(e) {
    this.pagination.currentPage = e;
    this.getData(e);
  }

  clearFilters() {
    this.filter.search = null;
    this.getData();
  }

  showForm(model?: any) {
    const initialState = {
      model,
    };
    this.modalService.show(ViewComponent, {
      class: 'modal-lg modal-dialog-centered',
      backdrop: 'static',
      keyboard: false,
      initialState,
    });
  }
}
