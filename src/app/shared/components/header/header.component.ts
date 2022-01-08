import { Component, OnInit } from '@angular/core';
import { Utils } from '@shared/utils/utils';
import { environment } from '@environments/environment';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profile: any = {
    name: null,
    email: null,
  };
  showDropDown = false;

  constructor(
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    let isLoggedIn = this.authService.isLogged();

    if (isLoggedIn) {
      let userData = this.authService.getUserData();
      this.profile.name = userData?.name;
      this.profile.email = userData?.email;
    }
  }

  onClickLogout() {
    this.authService.logout();
  }

  toggleMenu() {
    Utils.toggleClass(document.getElementById('body'), 'sidebar-enable');

    const body = document.getElementById('body');
    const logo = document.getElementById('header_logo');
    const navbar = document.getElementById('navbar-brand-box');

    if (document.body.clientWidth >= 992) {
      Utils.toggleClass(document.getElementById('body'), 'vertical-collpsed');
    } else {
      if (body.classList.contains('vertical-collpsed')) {
        body.classList.remove('vertical-collpsed');
      }
    }

    // logo
    if (body.classList.contains('vertical-collpsed')) {
      logo.classList.remove('large-logo');
      logo.classList.add('small-logo');

      navbar.classList.add('small-navbar-brand-box');
    } else {
      logo.classList.remove('small-logo');
      logo.classList.add('large-logo');

      navbar.classList.remove('small-navbar-brand-box');
    }
  }

  toggleDropdown() {
    this.showDropDown = !this.showDropDown;
  }
}
