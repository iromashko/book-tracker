import { Component, OnInit } from "@angular/core";
import { DataService } from "app/core/data.service";
import { LoggerService } from "app/core/logger.service";

import { Book } from "app/models/book";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Reader } from "app/models/reader";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: [],
})
export class DashboardComponent implements OnInit {
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(
    private loggerService: LoggerService,
    private dataService: DataService
  ) {
    this.loggerService.log("Creating the dashboard!");
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders().subscribe(
      (data: Reader[]) => (this.allReaders = data),
      (err: BookTrackerError) => console.log(err.friendlyMessage),
      () => this.loggerService.log("All done getting readers!")
    );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.loggerService.log("Done with dashboard initialization");
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }
}
