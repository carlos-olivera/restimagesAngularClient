
import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  images;

  constructor(public alertCtrl: AlertController, public restProvider: RestProvider) {
  }

  ngOnInit() {
  	this.getImages()
  }

  getImages() {
    this.restProvider.getImages()
    .then(data => {
      this.images = data["data"];
      console.log(this.images);
    });
  }


  removeImage(image): void {
  }


  likeImage(image) { 
	this.restProvider.updateImage(image).then((result) => { 
		image.likes = result.data.likes
		console.log(result); 
		}, (err) => { 
			console.log(err); 
		}); 
	}
}