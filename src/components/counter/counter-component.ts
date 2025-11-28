import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../../base/base-component.js';

@customElement('lit-counter')
export class CounterComponent extends BaseComponent {

  @property({ type: Number, reflect: true }) count = 0;
  @property({ type: Number, reflect: true }) step = 1;
  @property({ type: String, reflect: true }) label = '计数器';

  static styles = [
    ...BaseComponent.styles,
    css`
      .counter {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f8f9fa;
      }
      
      .counter-label {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
      
      .counter-value {
        font-size: 24px;
        font-weight: bold;
        color: #007bff;
      }
      
      .counter-controls {
        display: flex;
        gap: 8px;
      }
      
      .counter-button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s;
      }
      
      .counter-button:hover {
        background-color: #0056b3;
      }
      
      .counter-button:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
      }
    `
  ]

  protected init(): void {
    console.log(`${this.label} 组件已初始化`);
  }

  disconnectedCallback(): void {
    console.log(`${this.label} 组件已断开连接`);
  }

  // ➤ 修复：确保 this 未丢失
  private increment = () => {
    this.count += this.step;
    this.dispatchCustomEvent('counter-change', {
      count: this.count,
      action: 'increment',
    });
  };

  private decrement = () => {
    this.count -= this.step;
    this.dispatchCustomEvent('counter-change', {
      count: this.count,
      action: 'decrement',
    });
  };

  render() {
    return html`
      <div class="counter">
        <div class="counter-label">${this.label}</div>
        <div class="counter-value">${this.count}</div>
        <div class="counter-controls">
          <button class="counter-button" @click=${this.decrement}>-</button>
          <button class="counter-button" @click=${this.increment}>+</button>
        </div>
      </div>
    `;
  }
}
