import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController } from 'ionic-angular';
import { Camera, PictureSourceType } from '@ionic-native/camera';
//import { NgProgress } from '@ngx-progressbar/core';
import /*as*/Tesseract from 'tesseract.js';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  
  /*selectedImage: string;
  imageText: string;

  constructor(
    public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController, 
    private camera: Camera, 
    //public progress: NgProgress
    ) {

  }

  selectSource(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
           // this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image', 
          handler: () => {
           // this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text:'Cancel',
          role:'cancel'
        }
      ]
      
    });
    actionSheet.present();
  }

  getPicture(sourceType: PictureSourceType){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit:true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then(imageData => {
     // this.selectedImage = 'data:image/jpeg;base64,${imageData}'/*+ imageData;
      console.log(imageData);
      
    });
  }

  recognizeImage(){
    Tesseract.recognize(this.selectedImage)
    .progress(message => {
      if(message.status === 'recognizing text'){
        //this.progress.set(message.progress)
      }
    })
    .catch(err => console.error(err))
    .then(result => {
      this.imageText = result.text;
    })
    .finally(resultOrError => {
      //this.progress.complete();
    });
  }*/

}