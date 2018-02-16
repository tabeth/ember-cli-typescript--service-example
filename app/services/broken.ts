import Service from '@ember/service';

export default class Broken extends Service {
  testAttr: boolean = false;

  testFn(): boolean {
    return true
  }
}

declare module '@ember/service' {
  interface Registry {
    'broken': Broken;
  }
}
