import Service from '@ember/service';

export default class Fixed extends Service {
  testAttr: boolean = true;

  testFn(): boolean {
    return true
  }
}

declare module '@ember/service' {
  interface Registry {
    'fixed': Fixed;
  }
}
