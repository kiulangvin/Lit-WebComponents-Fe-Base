// 工具函数
export const Utils = {
  // 生成唯一ID
  generateId(): string {
    return `lit-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // 延迟执行
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // 检查元素是否在视口中
  isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};
