import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions,BarcodeScanResult } from "@ionic-native/barcode-scanner";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-einkaufbarcode',
  templateUrl: 'einkaufbarcode.html',
})
export class EinkaufbarcodePage {

  result: BarcodeScanResult;
  data:Observable<any>;
  constructor(private httpClient: HttpClient,private barcode: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EinkaufbarcodePage');
  }

  async scanBarcode(){
    try{
      const options: BarcodeScannerOptions = {
        prompt: 'Halte deine Handykamera auf den Barcode.',
        torchOn:true
      }
      this.result = await this.barcode.scan(options);
      this.getData().subscribe((result:any) =>{
        console.log(result);
      });
    }catch(e){

    }
  }

  getData():Observable<any>{ //result.text
    var url = 'http://opengtindb.org/?ean='+this.result.text+'&cmd=queryid=400000000';
    return this.data = this.httpClient.get(url);
  }

}
