import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Vacancy {
  id: number;
  title: string;
  location: string;
  type: string;
  posted: string;
  description: string;
}
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  isModalOpen: boolean = false;
  /**
   *
   */
  constructor(
      private router: Router
    ) {}

  features: Feature[] = [
    {
      icon: '👥',
      title: 'Talent Management',
      description: 'Streamline your recruitment process with our advanced applicant tracking system and find the perfect candidates for your organization.'
    },
    {
      icon: '📊',
      title: 'Performance Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and insights into your workforce performance and engagement.'
    },
    {
      icon: '🎯',
      title: 'Employee Development',
      description: 'Foster growth and development with personalized learning paths and career progression tools for your team members.'
    },
    {
      icon: '⚡',
      title: 'Automated Workflows',
      description: 'Save time and reduce errors with automated HR workflows for payroll, leave management, and administrative tasks.'
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'Keep your data safe with enterprise-grade security and stay compliant with labor laws and regulations.'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to help you get the most out of our HR management system.'
    }
  ];

  stats: Stat[] = [
    { value: '500+', label: 'Companies Trust Us' },
    { value: '50K+', label: 'Employees Managed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' }
  ];

  
  ngOnInit(): void {
    // Component initialization
  }

  openVacancies(): void {
    this.isModalOpen = true;
    this.router.navigate(['/openvacancies']);

  }

  closeVacancies(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  closeModalOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeVacancies();
    }
  }

  applyForJob(vacancy: Vacancy): void {
    // Handle job application logic here
    console.log('Applying for:', vacancy.title);
    alert(`Application form for ${vacancy.title} will open here`);
    
    // You can navigate to an application form or open another modal
    // this.router.navigate(['/apply', vacancy.id]);
  }
}