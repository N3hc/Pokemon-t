import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  @Input() card: any;
  @Output() goBack = new EventEmitter<void>();

  route = "assets/energy/";

  backToProducts() {
    this.goBack.emit();
  }
  ngOnInit(): void {
    console.log(this.card);
  }
}
