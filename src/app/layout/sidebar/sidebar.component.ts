import { Component, OnInit } from '@angular/core';


interface SubItem {
  name: string;
  route?: string;
  active?: boolean;
}

interface SidebarSection {
  name: string;
  expanded: boolean;
  subItems?: SubItem[];
}

interface SidebarPanel {
  icon: string;
  title: string;
  sections: SidebarSection[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showSidebar: boolean = false;
  selectedIndex: number = 0;
  
  sidebarPanels: SidebarPanel[] = [
   
   
    {
      icon: 'bi bi-speedometer2',
      title: 'Admin',
      sections: [
        
        {
          name: 'Users & Rights',
          expanded: true,
          subItems: [
            { name: 'Traffic Overview', route: '/analytics/traffic' },
            { name: 'Revenue Reports', route: '/analytics/revenue' },
            { name: 'User Behavior', route: '/analytics/behavior' },
            { name: 'Conversion Metrics', route: '/analytics/conversion' }
          ]
        },
        {
          name: 'Settings',
          expanded: false,
          subItems: [
            { name: 'Live Users', route: '/realtime/users' },
            { name: 'Active Sessions', route: '/realtime/sessions' },
            { name: 'Live Events', route: '/realtime/events' }
          ]
        },
        {
          name: 'Templates',
          expanded: false,
          subItems: [
            { name: 'Weekly Reports', route: '/reports/weekly' },
            { name: 'Monthly Reports', route: '/reports/monthly' },
            { name: 'Custom Reports', route: '/reports/custom' }
          ]
        },
        {
           name: 'Notification Settings',
          expanded: false,
          subItems: [
            { name: 'Weekly Reports', route: '/reports/weekly' },
            { name: 'Monthly Reports', route: '/reports/monthly' },
            { name: 'Custom Reports', route: '/reports/custom' }
          ]
        },
          {
           name: 'Designer',
          expanded: false,
          subItems: [
            { name: 'Weekly Reports', route: '/reports/weekly' },
            { name: 'Monthly Reports', route: '/reports/monthly' },
            { name: 'Custom Reports', route: '/reports/custom' }
          ]
        },
          {
           name: 'Reports',
          expanded: false,
          subItems: [
            { name: 'Weekly Reports', route: '/reports/weekly' },
            { name: 'Monthly Reports', route: '/reports/monthly' },
            { name: 'Custom Reports', route: '/reports/custom' }
          ]
        },
        
      ]
    },
    
    {
      icon: 'bi bi-people-fill',
      title: 'Operations',
      sections: [
        {
          name: 'Masters',
          expanded: false,
          subItems: [
            { name: 'Consignee', route: '/consignee' },
            { name: 'Billing Party', route: '/users/active' },
            { name: 'Transporter', route: '/users/inactive' },
            { name: 'Vehicle', route: '/users/groups' },
            { name: 'Vehicle Make', route: '/users/groups' },
            { name: 'Vehicle Model', route: '/users/groups' },
            { name: 'Driver', route: '/users/groups' },
            { name: 'Employee', route: '/users/groups' },
            { name: 'Content', route: '/users/groups' },
            { name: 'Load Capacity', route: '/users/groups' }

          ]
        },
        {
          name: 'Master Reports',
          expanded: false,
          subItems: [
            { name: 'User Roles', route: '/permissions/roles' },
            { name: 'Access Control', route: '/permissions/access' },
            { name: 'Admin Rights', route: '/permissions/admin' }
          ]
        },
        {
          name: 'Contracts',
          expanded: false,
          subItems: [
            { name: 'Login History', route: '/activity/login' },
            { name: 'Action Logs', route: '/activity/actions' },
            { name: 'Security Events', route: '/activity/security' }
          ]
        },
         {
          name: 'Transportations',
          expanded: false,
          subItems: [
            { name: 'Login History', route: '/activity/login' },
            { name: 'Action Logs', route: '/activity/actions' },
            { name: 'Security Events', route: '/activity/security' }
          ]
        }
      ]
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Analytics',
      sections: [
        {
          name: 'Performance',
          expanded: false,
          subItems: [
            { name: 'Page Speed', route: '/performance/speed' },
            { name: 'Load Times', route: '/performance/load' },
            { name: 'Error Rates', route: '/performance/errors' }
          ]
        },
        {
          name: 'SEO Analytics',
          expanded: false,
          subItems: [
            { name: 'Keywords', route: '/seo/keywords' },
            { name: 'Backlinks', route: '/seo/backlinks' },
            { name: 'Rankings', route: '/seo/rankings' }
          ]
        }
      ]
    },
    {
      icon: 'bi bi-gear-fill',
      title: 'Settings',
      sections: [
        {
          name: 'General Settings',
          expanded: false,
          subItems: [
            { name: 'Site Configuration', route: '/settings/site' },
            { name: 'Appearance', route: '/settings/appearance' },
            { name: 'Localization', route: '/settings/locale' }
          ]
        },
        {
          name: 'Security',
          expanded: false,
          subItems: [
            { name: 'Authentication', route: '/security/auth' },
            { name: 'SSL Settings', route: '/security/ssl' },
            { name: 'Backup Settings', route: '/security/backup' }
          ]
        },
        {
          name: 'Integrations',
          expanded: false,
          subItems: [
            { name: 'API Keys', route: '/integrations/api' },
            { name: 'Third-party Services', route: '/integrations/services' },
            { name: 'Webhooks', route: '/integrations/webhooks' }
          ]
        }
      ]
    }
  ];

  /**
   * Toggle sidebar visibility and update selected panel
   
   */
  toggleSidebar(index: number): void {
    if (this.selectedIndex === index && this.showSidebar) {
      this.showSidebar = false;
    } else {
      this.selectedIndex = index;
      this.showSidebar = true;
    }
  }

  closeSidebar(){
    this.showSidebar = false;
  }

  /**
   * Toggle section expansion state
   
   */
  toggleSection(section: SidebarSection): void {
    if (section.subItems && section.subItems.length > 0) {
      section.expanded = !section.expanded;
      
      // Optional: Close other sections when opening one (accordion behavior)
      // this.closeOtherSections(section);
    }
  }

  /**
   * Handle sub-item selection

   */
  selectSubItem(subItem: SubItem | string): void {
    // Clear all active states
    this.sidebarPanels.forEach(panel => {
      panel.sections.forEach(section => {
        if (section.subItems) {
          section.subItems.forEach(item => {
            if (typeof item === 'object') {
              item.active = false;
            }
          });
        }
      });
    });

    // Set active state for selected item
    if (typeof subItem === 'object' && subItem.name) {
      subItem.active = true;
      
      // Navigate to route if available
      if (subItem.route) {
        console.log(`Navigating to: ${subItem.route}`);
        // Add your router navigation logic here
        // this.router.navigate([subItem.route]);
      }
    }

    console.log('Selected sub-item:', subItem);
  }

  /**
   * Close all other sections except the provided one (accordion behavior)
  
   */
  private closeOtherSections(currentSection: SidebarSection): void {
    this.sidebarPanels[this.selectedIndex].sections.forEach(section => {
      if (section !== currentSection) {
        section.expanded = false;
      }
    });
  }

  /**
   * Get the current active panel
  
   */
  get currentPanel(): SidebarPanel {
    return this.sidebarPanels[this.selectedIndex];
  }

  /**
   * Check if any section in current panel has expanded state
  
   */
  get hasExpandedSection(): boolean {
    return this.currentPanel.sections.some(section => section.expanded);
  }



  sidebarExpanded: boolean = false;

toggleSidebarExpansion(): void {
  this.sidebarExpanded = !this.sidebarExpanded;
}

}
