import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  @Input() card: any;
  @Output() goBack = new EventEmitter<void>();

  backToProducts() {
    this.goBack.emit();
  }
  
  ngOnInit(): void {
    console.log(this.card);
  }
}
