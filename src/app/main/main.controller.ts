import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';

export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;
  public kendoSource: kendo.data.DataSource;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, webDevTec: WebDevTecService/*, toastr: any*/) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1456271780507;
    //this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getWebDevTec();

    var self = this;

    $timeout(function() {
      self.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    //this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;

    this.kendoSource = new kendo.data.DataSource({
      data: this.awesomeThings,
      pageSize: 21
    });
  }
}
