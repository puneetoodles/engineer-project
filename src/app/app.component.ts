import { Component, OnInit } from '@angular/core';
import { ApiService } from "./app.service";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent implements OnInit {
  lists: any;
  searchText: string;
  modalData:any;
  constructor(private apiService: ApiService, config: NgbModalConfig, private modalService: NgbModal) {
  }

  ngOnInit() {
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.getData())
      )
      .subscribe((res) => {
        console.log("res", res.hits)
        this.lists = res.hits;

      })
      ;
  }

  openModal(content, data) {
    this.modalData = data;
    this.modalService.open(content);
  }
}
