import { Card } from './../../../views/card-crud/card.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CardRead2DataSource } from './card-read2-datasource';

@Component({
  selector: 'app-card-read2',
  templateUrl: './card-read2.component.html',
  styleUrls: ['./card-read2.component.css']
})
export class CardRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Card>;
  dataSource: CardRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'solicitation_status', 'credit', 'solicitation_date', 'score', 'action'];

  ngOnInit() {
    this.dataSource = new CardRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
