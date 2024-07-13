import { HttpClient } from '@angular/common/http'
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/api/products').subscribe((data: any) => {
      this.products = data;
    });
  }
}
