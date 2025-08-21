import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  ngOnInit(): void {
  }

  @Output() toggleSettings = new EventEmitter<void>();

  // Profile Modal visibility
  showProfileModalState: boolean = false;

  // Mock current user and organization data
  currentUser = {
    name: 'Ayush Panwar',
    email: 'ayush@example.com',
    role: 'Admin',
    department: 'IT Department'
  };

  organizationData = {
    financialYear: '2025-2026',
    address: 'Rajivnagar 248140'
  };

  // Spinner states
  switching = false;
  loggingOut = false;
  loading = false;


  
  constructor() {

      



    // Listen for Escape key to close modal
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (this.showProfileModalState && event.key === 'Escape') {
        this.closeProfileModal();
      }
    });
  }

  // Greeting based on current time
 
   // Your method here
  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    else if (hour < 18) return 'Good afternoon';
    else return 'Good evening';
  }

  // Optional: currentUser (if used in the template)
 

  // Profile modal controls
  toggleProfileModal(): void {
    this.showProfileModalState = !this.showProfileModalState;
  }

  showProfileModal(): boolean {
    return this.showProfileModalState;
  }

  closeProfileModal(): void {
    this.showProfileModalState = false;
  }

  closeModalOnBackdrop(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeProfileModal();
    }
  }

  // Settings sidebar toggle
  onSettingsClick(): void {
    this.toggleSettings.emit();
  }

  // Simulate switch account action
  switchAccount(): void {
    this.switching = true;
    setTimeout(() => {
      this.switching = false;
      alert('Switched account!');
    }, 1500);
  }

  isSwitching(): boolean {
    return this.switching;
  }

  // Simulate logout
  confirmLogout(): void {
    this.loggingOut = true;
    setTimeout(() => {
      this.loggingOut = false;
      alert('Logged out successfully!');
    }, 1500);
  }

  isLoggingOut(): boolean {
    return this.loggingOut;
  }

  // Open tools
  openCalculator(): void {
    alert('Calculator opened.');
  }

  openHelp(): void {
    alert('Help section opened.');
  }

  showShortcuts(): void {
    alert('Keyboard shortcuts shown.');
  }

  openAnalytics(): void {
    alert('Analytics dashboard opened.');
  }

  isLoading(): boolean {
    return this.loading;
  }


}
