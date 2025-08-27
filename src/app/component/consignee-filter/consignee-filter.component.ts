import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consignee-filter',
  templateUrl: './consignee-filter.component.html',
  styleUrls: ['./consignee-filter.component.scss']
})
export class ConsigneeFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
   @Output() toggleFilter = new EventEmitter<void>();

   closefilter(){
    this.toggleFilter.emit();
   }

}
