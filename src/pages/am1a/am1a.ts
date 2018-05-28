import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Am1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-am1a',
  templateUrl: 'am1a.html',
})
export class Am1aPage {
  // Fields
  public grades = [{"firstname": "Dagobert",
                    "infix": "",
                    "lastname": "Duck",
                    "residence": "Duckstad",
                    "absence": "624/123",
                    "age": "88",
                    "photo": "./assets/imgs/dagobertduck.jpg" },
                    {"firstname": "Dagobert",
                    "infix": "",
                    "lastname": "Duck",
                    "residence": "Duckstad",
                    "absence": "624/123",
                    "age": "88",
                    "photo": "./assets/imgs/dagobertduck.jpg" }];
  public test = "Dit is een test";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1aPage');
    
  }

}
