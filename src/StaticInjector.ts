import {Injector} from '@angular/core';

export class StaticInjector {
  private static injector: Injector;

  public static getInjector() {
    return this.injector;
  }

  public static setInjector(injector: Injector) {
    this.injector = injector;
  }
}
