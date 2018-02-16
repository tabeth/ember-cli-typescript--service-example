import Controller from '@ember/controller';
import { get, set, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller.extend({
  fixed: service('fixed')

}) {

  broken = service('broken');

  init(this: ApplicationController) {
    try {
      console.log(`The broken service works: ${this.get('broken').get('testAttr')}`);
    } catch(e) {
      console.log(`The broken service works: ${false}`);
    }

    try {
      console.log(`The fixed service works: ${this.get('fixed').get('testAttr')}`);
    } catch(e) {
      console.log(`The fixed service works: ${false}`);
    }
  }
};
