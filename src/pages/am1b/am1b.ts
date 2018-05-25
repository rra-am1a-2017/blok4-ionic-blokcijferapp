import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GradesProvider } from '../../providers/grades/grades';

/**
 * Generated class for the Am1bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-am1b',
  templateUrl: 'am1b.html',
})
export class Am1bPage {
  // Fields zijn klassevariabelen. D
  private users = [{"firstname": "Dagobert", 
                    "infix": "",
                    "lastname": "Duck",
                    "age": 98,
                    "residence": "Duckstad",
                    "absence": "635/105",
                    "photoPath": "./assets/imgs/dagobertduck.jpg"},
                    {"firstname": "Zwarte", 
                    "infix": "",
                    "lastname": "Magica",
                    "age": 108,
                    "residence": "Duckstad",
                    "absence": "635/635",
                    "photoPath": "./assets/imgs/magica.png"},
                    {"firstname": "Kwik", 
                    "infix": "Kwek",
                    "lastname": "Kwak",
                    "age": 23,
                    "residence": "Duckstad",
                    "absence": "635/0",
                    "photoPath": "./assets/imgs/kwikkwekkwak.png"}];

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public gradesProvider: GradesProvider) {
    this.gradesProvider.getGrades().subscribe((data: any[]) => {
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1bPage');
  }

}
