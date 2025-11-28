import { LitElement, css } from 'lit';
import type { PropertyValues } from 'lit';

// 基础组件类，其他组件可以继承它
export  class BaseComponent extends LitElement {
  // 提供统一的样式隔离
  static styles = [
    css`
    :host {
      display: block;
      box-sizing: border-box;
    }
    
    * {
      box-sizing: inherit;
    }
  `
  ] ;
  
  // 生命周期钩子扩展
  protected firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.init();
  }
  
  // 初始化方法，子类可以重写
  protected init(): void {
    // 基础初始化逻辑
  }
  
 

   connectedCallback() {
    super.connectedCallback();
    this.onConnected();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onDisconnected();
  }
  protected onConnected(): void {}
  protected onDisconnected(): void {}

   /* ----------------------------------------
   * nextTick —— 等待 DOM 渲染完成
   * ---------------------------------------- */
  protected nextTick() {
    return this.updateComplete;
  }

  // 安全地触发自定义事件
  protected dispatchCustomEvent<T>(name: string, detail?: T, options?: EventInit): void {
    const eventOptions: CustomEventInit = {
      bubbles: true,
      composed: true,
      detail,
       ...options,
    };
    
    this.dispatchEvent(new CustomEvent<T>(name, eventOptions));
  }
  
  // 防抖函数
  protected debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    
    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }
}
