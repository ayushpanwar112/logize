import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/tab.model';
import { TabService } from '../../services/tab.service';
import { Router } from '@angular/router';
import { EmptyComponent } from '../../pages/empty/empty.component';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  tabs: Tab[] = [];
  activeTab!: number;

  constructor(private tabService: TabService, private router: Router) {}

  ngOnInit() {
    this.tabService.tabs$.subscribe(t => this.tabs = t);
    this.tabService.activeTab$.subscribe(id => {
      this.activeTab = id;
      const activeTab = this.tabs.find(t => t.id === id);
      if (activeTab) {
        this.router.navigate([activeTab.route]);
      }
    });
  }

  selectTab(id: number) {
    this.tabService.setActiveTab(id);
  }

  close(id: number) {
    this.tabService.closeTab(id);
  }

  addNewTab() {
    this.tabService.addTab({
      id: Date.now(),
      title: `New Tab ${this.tabs.length + 1}`,
      route: '/emptypage',
      component: EmptyComponent,
      closable: true
    });
  }
}
