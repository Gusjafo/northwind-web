import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { leftToRightAnimation, rightToLeftAnimation } from 'src/app/animations/enter-leave/enter-leave.animations';

@Component({
  selector: 'app-switch-view',
  templateUrl: './switch-view.component.html',
  styleUrls: ['./switch-view.component.scss'],
  animations: [leftToRightAnimation, rightToLeftAnimation]
})
export class SwitchViewComponent implements OnInit {

  static readonly CARD_KEY = "cardViewTemplate";
  static readonly TABLE_KEY = "tableViewTemplate";

  @Input() templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  @Input() defaultTemplateKey?: string;

  isCardViewVisible: boolean = true;
  item: any;

  ngOnInit(): void {
    if (this.defaultTemplateKey) {
      this.isCardViewVisible = SwitchViewComponent.CARD_KEY === this.defaultTemplateKey;
    }
  }

  getCardKey(): any {
    return SwitchViewComponent.CARD_KEY;
  }

  getTableKey(): any {
    return SwitchViewComponent.TABLE_KEY;
  }
}
