import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BikeComponent } from '../models/bike-component.model';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

const API_URL = "https://bike-component-log.firebaseio.com/components";
const CACHE_SIZE = 1; // the number of elements that are cached and replayed for each subscriber

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  public user: any;
  public componentsCache$: Observable<Array<BikeComponent>>;

  constructor(private _auth: AuthService, private _http: HttpClient) { }

//   public addComponent(newComponent) {
//   return firebase.auth().currentUser.getIdToken(true).then(idToken => {
//     return $http({
//       method: "POST",
//       url: `${API_URL}.json?auth=${idToken}`,
//       data: newComponent
//     }).then(response => {
//       // add fbId from response
//       newComponent.fbId = response.data.name
//       // put the component back up to firebase, now with a fb id attached
//       return $http({
//         "method": "PUT",
//         "url": `${API_URL}/${newComponent.fbId}/.json?auth=${idToken}`,
//         "data": newComponent
//       })
//     })
//   })
// }


// "updateComponent": {
//   "value": function (component) {
//     return firebase.auth().currentUser.getIdToken(true).then(idToken => {
//       return $http({
//         method: "PUT",
//         url: `${API_URL}/${component.fbId}.json?auth=${idToken}`,
//         data: component
//       })
//     })
//   }
// }

  public getBikeComponents(fbUID): Observable<Array<Component>> {
    if (!this.componentsCache$) {
      this.componentsCache$ = this._requestBikeComponents(fbUID)
        .pipe(
          shareReplay(CACHE_SIZE)
        );
        return this.componentsCache$;
    }
  }

private _requestBikeComponents(fbUID) {
  return this._http.get<Component[]>(`${API_URL}.json?orderBy="userId"&equalTo="${fbUID}"`)
  .pipe(
    map(res => {
      const components = res.valueOf();
      return Object.keys(components)
      .map(key => components[key]);
    }));
}


// "deleteComponent": {
//   "value": function (comp) {
//     return firebase.auth().currentUser.getIdToken(true).then(idToken => {
//       return $http({
//         method: "DELETE",
//         url: `${API_URL}/${comp.fbId}/.json?auth=${idToken}`,
//       })
//     })
//   }
// },
// "addImage": {
//   value: function(file) {
//     // add a time stamp to make each image file unique on Firebase
//     const stamp = Date.now()
//     return firebase.storage().ref("/images/ComponentImages/").child(file.name + stamp).put(file).then(result => {
//       // get the url of the image you uploaded
//       return firebase.storage().ref("/images/ComponentImages/").child(file.name + stamp).getDownloadURL()
//     })
//   }
// },
// "deleteImage": {
//   value: function(file) {
//     return firebase.storage().ref("/images/ComponentImages/").child(file).delete().then(function () {
//       $mdToast.show(
//         $mdToast.simple()
//           .parent($("#toast-container"))
//           .textContent("Photo deleted.")
//           .hideDelay(3000)
//       );
//     }).catch(function (error) {
//       $mdToast.show(
//         $mdToast.simple()
//           .parent($("#toast-container"))
//           .textContent("Uh oh, error deleting photo.")
//           .hideDelay(3000)
//       );
//     });
//   }
// } 
}
