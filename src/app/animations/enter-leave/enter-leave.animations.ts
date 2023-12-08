import { trigger, animate, transition, style, state } from "@angular/animations";

export const leftToRightAnimation =
  trigger('leftToRightAnimation', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(500, style({transform: 'translateX(0)'}))
    ]),
    // transition(':leave', [
    //   style({transform: 'translateX(0)'}),
    //   animate(1, style({transform: 'translateX(-100%)'}))
    // ]),
  ]);

  export const rightToLeftAnimation =
  trigger('rightToLeftAnimation', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate(500, style({transform: 'translateX(0)'}))
    ]),
    // transition(':leave', [
    //   style({transform: 'translateX(0)'}),
    //   animate(1, style({transform: 'translateX(100%)'}))
    // ]),
  ]);
