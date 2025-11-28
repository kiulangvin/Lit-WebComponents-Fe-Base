import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@/base/base-component.ts';

// 示例组件 - 一个简单的卡片组件
@customElement('lit-card')
export class CardComponent extends BaseComponent {
  @property({
    type: String,
    attribute: 'title',
    reflect: true
  })
  title = '';
  @property({
    type: Boolean,
    attribute: 'shadow',
    reflect: true
  })
  shadow = true;
  static styles = [
    ...BaseComponent.styles,
    css`
    .card {
      border-radius: 8px;
      background-color: white;
      overflow: hidden;
      transition: box-shadow 0.3s ease;
    }
    
    .card.shadow {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      background-color: #f8f9fa;
    }
    
    .card-title {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
    
    .card-body {
      padding: 16px;
    }
  `];

  render() {
    return html`
      <div class="card ${this.shadow ? 'shadow' : ''}">
        ${this.title ? html`
          <div class="card-header">
            <h3 class="card-title">${this.title}</h3>
          </div>
        ` : ''}
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
