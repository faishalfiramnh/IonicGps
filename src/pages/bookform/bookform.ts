import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the BookformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookform',
  templateUrl: 'bookform.html',
})
export class BookformPage {
      book: any = {
        judul: '',
        penerbit:'',
        pengarang:''
      }
      title = '';
    header:any = {};
    bookID = '';
    toaster: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookformPage');
  }

}
