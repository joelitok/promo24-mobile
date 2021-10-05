import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { NavController, Platform  } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  
  
  //options : InAppBrowserOptions = {
    //location : 'yes',//Or 'no' 
   // hidden : 'no', //Or  'yes'
  //  clearcache : 'yes',
  //  clearsessioncache : 'yes',
  //  zoom : 'no',//Android only ,shows browser zoom controls 
   // hardwareback : 'yes',
   // mediaPlaybackRequiresUserAction : 'no',
  //  shouldPauseOnSuspend : 'no', //Android only 
  //  closebuttoncaption : 'Close', //iOS only
  //  disallowoverscroll : 'no', //iOS only 
  //  toolbar : 'yes', //iOS only 
   // enableViewportScale : 'no', //iOS only 
  //  allowInlineMediaPlayback : 'no',//iOS only 
   // presentationstyle : 'pagesheet',//iOS only 
  //  fullscreen : 'yes',//Windows only    
//};



  constructor(
    public navCtrl: NavController, 
    private iab: InAppBrowser,
    public network:Network,
    public dialog:Dialogs,
    public platform: Platform, ) {

  this.network.onDisconnect().subscribe(()=>{
    this.dialog.alert('Activé votre connection internet');
 
      });
/*this.network.onConnect().subscribe(()=>{
setTimeout(()=>{
this.dialog.alert('Active votre connection internet');
 
},2000)
 });*/

    
    }
    ngOnInit(){
      this.platform.ready().then(() => {
        let browser = this.iab.create('https://promo24-v1.herokuapp.com/','_system', {zoom:'no',location:'no'});
        //let browser = this.iab.create('https://promo24.herokuapp.com/','_self', {zoom:'no',location:'no'});
         //let browser = this.iab.create('your_website_url','_blank',{zoom:'no',location:'no'});
         browser.show();
        });
    }

  
    

}
