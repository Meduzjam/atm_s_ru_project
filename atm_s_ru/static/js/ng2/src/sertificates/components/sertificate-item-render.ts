import { Component, Input } from "@angular/core";



@Component({
	selector: 'sertificate-item-render',
	template: `
		<div class="panel panel-default" style="transition: opacity 0.3s, visibility 0s linear 0.3s;" *ngIf="sertificate">
		  <div class="panel-heading">{{sertificate.Type}}: {{sertificate.Title}}</div>
		  <div class="panel-body">
            <a href="#" class="thumbnail">
              <img src="{{sertificate.File}}">
            </a>
          </div>
        </div>
	`

})
export class SertificateItemRender {

	@Input() sertificate;

}