import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AppConstants } from '@shared/app.constants';
import { sideNavAnimation, sideNavContainerAnimation, SubMenu } from '@shared/components/side-nav/side-nav.animation';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [sideNavAnimation, sideNavContainerAnimation, SubMenu]
})

export class SideNavComponent implements OnInit {

  panelOpenState = false;
  isOpen = false;
  public isScreenSmall: boolean = false;
  App_Name = AppConstants.App_Name

  menus: any[] = [];
  activeIndex: number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    // TODO:=> we need to get menu from api. for testing purposes i hardcorded the values 
    this.menus =
    [
      {
        "routerLink": "/dashboard",
        "data": {
          "menu": {
            "title": "Dashboard",
            "icon": "dashboard",
            "menuId": 1,
            "selected": false,
            "expanded": false,
            "order": 1
          }
        },
        "children": []
      },
      {
        "routerLink": "/dashboard",
        "data": {
          "menu": {
            "title": "User Management",
            "icon": "dashboard",
            "menuId": 1,
            "selected": false,
            "expanded": false,
            "order": 1
          }
        },
        "children": [
          {
            "routerLink": "preferences/SetupUser",
            "data": {
              "menu": {
                "title": "Setup User",
                "icon": "manage_accounts",
                "menuId": 705,
                "selected": false,
                "expanded": false,
                "order": 7,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "preferences/Access",
            "data": {
              "menu": {
                "title": "Access Permissions",
                "icon": "engineering",
                "menuId": 706,
                "selected": false,
                "expanded": false,
                "order": 8,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "userRestPassword",
            "data": {
              "menu": {
                "title": "Rest User Password",
                "icon": "settings_suggest",
                "menuId": 718,
                "selected": false,
                "expanded": false,
                "order": 10,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "preferences/ChangePassword",
            "data": {
              "menu": {
                "title": "Change Password",
                "icon": "password",
                "menuId": 709,
                "selected": false,
                "expanded": false,
                "order": 11,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          }
        ]
      },
      {
        "routerLink": "Preferences",
        "data": {
          "menu": {
            "title": "Preferences",
            "icon": "construction",
            "menuId": 700,
            "selected": false,
            "expanded": false,
            "order": 504
          }
        },
        "children": [
          {
            "routerLink": "preferences/CountrySetup",
            "data": {
              "menu": {
                "title": "Country Setup",
                "icon": "flag",
                "menuId": 701,
                "selected": false,
                "expanded": false,
                "order": 1,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "instituteSetup",
            "data": {
              "menu": {
                "title": "Institute Setup",
                "icon": "dashboard",
                "menuId": 702,
                "selected": false,
                "expanded": false,
                "order": 3,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "preferences/UserRole",
            "data": {
              "menu": {
                "title": "User Roles",
                "icon": "admin_panel_settings",
                "menuId": 703,
                "selected": false,
                "expanded": false,
                "order": 5,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "userDepartment",
            "data": {
              "menu": {
                "title": "Department",
                "icon": "groups",
                "menuId": 704,
                "selected": false,
                "expanded": false,
                "order": 6,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          },
          {
            "routerLink": "preferences/documentTypes",
            "data": {
              "menu": {
                "title": "Document Type",
                "icon": "source",
                "menuId": 710,
                "selected": false,
                "expanded": false,
                "order": 12,
                "operations": "[SAVE,UPDATE,DELETE,FETCH,CLEAR]"
              }
            },
            "children": []
          }
        ]
      },
      {
        "routerLink": "/dashboard",
        "data": {
          "menu": {
            "title": "Permissions",
            "icon": "dashboard",
            "menuId": 1,
            "selected": false,
            "expanded": false,
            "order": 1
          }
        },
        "children": [
          {
            "routerLink": "permissions",
            "data": {
              "menu": {
                "title": "Permission Manager",
                "icon": "manage_accounts",
              }
            },
            "children": []
          }
        ]
      }
    ];
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }


  onMenuSelect(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = 0;
      return;
    }

    this.activeIndex = index;
  }

}
