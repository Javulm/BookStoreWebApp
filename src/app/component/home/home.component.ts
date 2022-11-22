import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { __values } from 'tslib';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private bookService: BookService, private headerCom: HeaderComponent) { }
  booklist: Book[] = [];
  sortby = 'relevance';
  search: any;

  ngOnInit(): void {
    this.sortBooks(this.sortby);
  }
  sortBooks(deviceValue: any) {
    this.sortby = deviceValue
    if (this.sortby == 'relevance') {
      this.bookService.getBookData().subscribe((bookdata: any) => {
        this.booklist = bookdata.data;
        console.log(this.booklist);
      });
    }
    if (this.sortby == 'asc') {
      this.bookService.sortBooksByPriceAsc().subscribe((data: any) => {
        this.booklist = data.data;
        console.log(this.booklist)
      });
    }
    if (this.sortby == 'desc') {
      this.bookService.sortBooksByPriceDesc().subscribe((data: any) => {
        this.booklist = data.data;
        console.log(this.booklist)
      });
    }
  }
  searchByBook() {
    if (this.search != '') {
      this.bookService.searchBookByName(this.search).subscribe((data: any) => {
        this.booklist = data.data;
        console.log('books', this.booklist);
      });
    } else {
      this.ngOnInit();
    }
  }

}
