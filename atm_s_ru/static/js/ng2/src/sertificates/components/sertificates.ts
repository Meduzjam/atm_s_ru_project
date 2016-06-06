import { Component, OnInit } from "@angular/core";
import { SertificatesService } from '../services/sertificates';
import { SertificateItemRender } from './sertificate-item-render';
import { SertificateModel } from '../models/sertificate';

@Component({
	selector: 'sertificates',
	directives: [],
	template: `

	  <div class="row">

		<div class="col-lg-3 list-group">
		  <a href="#" class="list-group-item{{sertificate.isCurrent(currentSertificate)}}" *ngFor="let sertificate of sertificates" (click)="setCurrentSertificate(sertificate)">
		    {{sertificate.Title}}
		  </a>
		</div>

        <div class="col-lg-9">
          <div *ngIf="currentSertificate">
            <a href="#" class="thumbnail">
              <img style=""src="{{currentSertificate.File}}">
            </a>
          </div>
        </div>

	  </div>

	  <div class="row" *ngIf="error" class="alert alert-danger" role="alert">{{error.status}}</div>

	`
})
export class Sertificates implements OnInit {

	sertificates: SertificateModel[];
	currentSertificate: SertificateModel;	
	error: any;

	constructor(public sertificatesService: SertificatesService) { }

	getSertificates() {
		this.sertificates = [];
		this.currentSertificate = null;
		this.error = null;

		this.sertificatesService
			.getSertificates()
			.then(sertificates => { 
					this.sertificates = sertificates; 
					this.currentSertificate = this.sertificates[0] || undefined 
					})
			.catch(this.OnError.bind(this))
	}

	setCurrentSertificate(sertificate: SertificateModel) {
		this.currentSertificate = sertificate || undefined;
	}




	OnError(error: any) {

		this.error = error;
		console.error(this.error);
	}



	ngOnInit() {
		this.getSertificates();
	}

	LogClick(){
		console.log(this.sertificates);
		console.log(this.currentSertificate);
	}
	

}