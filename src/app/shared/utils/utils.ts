export class Utils {
  public static toggleClass(element: Element, cls: string) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
  }
}
