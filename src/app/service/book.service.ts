import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }
  searchBookByName(name: String) {
    return this.http.get("http://localhost:8081/book/findbook/" + name);
  }

  getBookData() {
    return this.http.get("http://localhost:8081/book/allbooks");
  }

  sortBooksByPriceAsc() {
    return this.http.get("http://localhost:8081/book/sortasc");
  }

  sortBooksByPriceDesc() {
    return this.http.get("http://localhost:8081/book/sortdesc");
  }
}
