import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { GradesProvider } from '../../providers/grades/grades';
import { AlertController } from 'ionic-angular';

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
  private users = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gradesProvider: GradesProvider,
              public alertCtrl: AlertController) {              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1bPage');
    this.gradesProvider.getGrades().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

  public age(birthday) {
    // getFullMonth() geeft de correcte maand weer gebruik dit om de leeftijd
    // nauwkeuriger te beoordelen.
    let date_now = new Date();
    let date = new Date(birthday);
    // console.log(date.getFullYear());
    // console.log(date_now.getFullYear());
    return date_now.getFullYear() - date.getFullYear();
  }

  public changeResidence(residence) {
    console.log("Mijn woonplaats is: " + residence );

    let changeResidenceInDb = this.alertCtrl.create({title: "Huidige woonplaats " + residence,
                                                     message: "Voer een nieuwe woonplaats in:",
                                                     inputs: [{type: "text",
                                                              name: "newResidence"}],
                                                     buttons: [{text: "Annuleren"},
                                                               {text: "Wijzig",
                                                                handler:  (alertData) => {
                                                                  console.log(alertData.newResidence);
                                                                  this.gradesProvider.updateResidence(alertData.newResidence).subscribe((data: any[]) => {
                                                                    console.log(data);
                                                                  });
                                                                }}]
                                                    });

    changeResidenceInDb.present();
  }


}
