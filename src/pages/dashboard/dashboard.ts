import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
    nama=''

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.storage.get('nama').then((val)=>{
      this.nama = val
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
