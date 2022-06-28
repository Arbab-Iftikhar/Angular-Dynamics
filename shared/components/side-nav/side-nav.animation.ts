import { trigger, state, style, transition, animate } from "@angular/animations"

/* comments: sets the width of an element to 200px when 'open' and to 60px
 *   when closed.  Animates in between these two states over '0.3s'
 */

export const sideNavAnimation = trigger('openCloseSidenav', [
  // ...
  state('open', style({
    width: '250px',
  })),
  state('closed', style({
    width: '60px',
  })),
  transition('open <=> closed', [
    animate('0.4s')
  ]),
]);

/*
 * animation: sideNavContainerAnimation
 * trigger: 'openCloseSidenavContent'
 *
 * comments: Sets the margin-left to 201px when "open" and 61px when "closed".
 */

export const SubMenu = trigger('SubMenu', [
  transition(':enter', [
    style({ opacity:0,transform: 'translateY(-30px)' }),
    animate('300ms ease-out', style({ opacity:1,transform: 'translateY(0px)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity:0,transform: 'translateY(-30px)' }))
  ])
]);


export const sideNavContainerAnimation = trigger('openCloseSidenavContent', [
  state('open', style({
    'margin-left': '250px',
  })),
  state('closed', style({
    'margin-left': '60px',
  })),
  transition('open <=> closed', [
    animate('0.4s')
  ]),
]);