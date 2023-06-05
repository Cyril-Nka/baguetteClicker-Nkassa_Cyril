import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements OnInit {
  @Input() title: string;
  @Input() copyrightYear: number;
  @Input() copyrightName: string;

  ngOnInit(): void {} 
   
  constructor() {
      this.title = '';

      this.copyrightYear = 0;

      this.copyrightName = '';
      
    }
}
