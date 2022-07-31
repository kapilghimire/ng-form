import { Component } from "@angular/core";
import { UserSettings } from "../data/user-settings";

@Component({
  selector: 'user-settings-form',
  templateUrl:'user-settings-form.html',
  styles: []
})
export class UserSettingsFormComponent {

  userSettings:UserSettings={
    name:'Miltion',
    emailOffers:true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes:'here are some notes'
  }



}
