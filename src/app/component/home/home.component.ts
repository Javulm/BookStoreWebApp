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
  sortby: string = "";

  ngOnInit(): void {
    console.log('sort:', this.sortby)
    if (this.headerCom.books != null) {
      this.headerCom.searchByBookname();
    }
    if (this.sortby != null) {
      this.bookService.getBookData().subscribe((bookdata: any) => {
        this.booklist = bookdata.data;
        console.log(this.booklist);
      });
    } else {
      this.sortBooks();
      this.booklist = this.headerCom.books;
    }
  }
  sortBooks() {
    if (this.sortby == "asc") {
      this.bookService.sortBooksByPriceAsc().subscribe((data: any) => {
        this.booklist = data.data;
        console.log(this.booklist)
      });
    }
    if (this.sortby == "desc") {
      this.bookService.sortBooksByPriceDesc().subscribe((data: any) => {
        this.booklist = data.data;
        console.log(this.booklist)
      });
    }
  }

}
