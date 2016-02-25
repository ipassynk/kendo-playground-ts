/** @ngInject */
export function camps():angular.IDirective {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/camps/camps.html',
    controller: CampsController,
    controllerAs: 'vm',
    bindToController: true
  };
}

/** @ngInject */
export class CampsController {
  public camps:any;

  constructor(private FirebaseFactory, private $firebaseObject) {
    const obj = $firebaseObject(FirebaseFactory);

    obj.$loaded().then(()=> {
      this.camps = obj.camps;
    });
  }
}
