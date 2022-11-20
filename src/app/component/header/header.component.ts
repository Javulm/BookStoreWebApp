import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search: any;
  books: any;
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
  }
  searchByBookname() {
    this.bookService.searchBookByName(this.search).subscribe((getData: any) => {
      this.books = getData.getData;
    });
  }
}
