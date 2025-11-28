import { html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@/base/base-component.ts';
import buttonStyles from './button.scss?inline';
@customElement('lit-button')
export class WcButton extends BaseComponent {
  // 类型 primary / success / danger
  @property({ type: String }) type: string = 'primary';

  // 大小 small / medium / large
  @property({ type: String }) size: string = 'medium';

  // 禁用
  @property({ type: Boolean }) disabled: boolean = false;

  static styles = [
    ...BaseComponent.styles,
    css`${unsafeCSS(buttonStyles)}`
  ];

  private handleClick(e: Event) {
    if (this.disabled) {
      e.stopImmediatePropagation();
      return;
    }
    // 触发自定义事件
    this.dispatchCustomEvent('my-click', {});
  }

  render() {
    return html`
      <button
        class="${this.type} ${this.size}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `;
  }
}