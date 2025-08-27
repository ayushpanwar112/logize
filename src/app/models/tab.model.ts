// models/tab.model.ts
export interface Tab {
  title: string;
  route: string;
  id: number; // unique ID for tracking
  closable: boolean;
    component: any;
}
