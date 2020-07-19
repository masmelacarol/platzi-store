import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  items = ['carol', 'estefanny', 'carola'];
  power = 10;

  ngOnInit(): void {}

  addItem(): void {
    this.items.push('new item');
  }

  deleteItems(): void {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
  deleteItem(index): void {
    this.items.splice(index, 1);
  }
}
