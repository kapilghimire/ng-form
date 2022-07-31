import { Component } from "@angular/core";
import { UserSettings } from "../data/user-settings";

@Component({
  selector: 'user-settings-form',
  templateUrl:'user-settings-form.html',
  styleUrls:['user-settings-form.css']
})
export class UserSettingsFormComponent {

  userSettings:UserSettings={
    name: null,
    emailOffers:null,
    interfaceStyle: null,
    subscriptionType: null,
    notes:null
  }



}
