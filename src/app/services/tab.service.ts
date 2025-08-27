import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from '../models/tab.model';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabs: Tab[] = [
    { id: 1, title: 'Dashboard', route: '/dashboard', component: DashboardComponent, closable: false }
  ];

  private activeTabId = 1;
  readonly MAX_TABS = 9; // Max 9 tabs allowed

  tabs$ = new BehaviorSubject<Tab[]>(this.tabs);
  activeTab$ = new BehaviorSubject<number>(this.activeTabId);

  addTab(tab: Tab) {
    if (this.tabs.length >= this.MAX_TABS) {
      alert('You can open only 9 tabs at a time.');
      return;
    }

    this.tabs.push(tab);
    this.activeTabId = tab.id;
    this.update();
  }

  closeTab(id: number) {
    this.tabs = this.tabs.filter(t => t.id !== id);
    if (this.activeTabId === id && this.tabs.length) {
      this.activeTabId = this.tabs[this.tabs.length - 1].id;
    }
    this.update();
  }

  setActiveTab(id: number) {
    this.activeTabId = id;
    this.update();
  }

  updateActiveTabRoute(route: string, title: string) {
    const tabIndex = this.tabs.findIndex(t => t.id === this.activeTabId);
    if (tabIndex !== -1) {
      this.tabs[tabIndex].route = route;
      this.tabs[tabIndex].title = title;
      this.update();
    }
  }

  private update() {
    this.tabs$.next([...this.tabs]);
    this.activeTab$.next(this.activeTabId);
  }
}
