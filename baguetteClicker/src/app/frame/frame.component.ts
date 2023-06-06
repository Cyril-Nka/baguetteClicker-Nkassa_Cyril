import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',

  templateUrl: './frame.component.html',
  
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements OnInit {

  @Input() title: string;

  @Input() copyrightYear: number | undefined;

  @Input() copyrightName: string;

  constructor() {

    this.title = '';

    this.copyrightName = '';

    this.copyrightName = '';
  }

  ngOnInit(): void {}
}
