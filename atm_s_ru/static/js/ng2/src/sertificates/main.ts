import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from "@angular/core";
import { SertificatesService } from './services/sertificates';
import { Sertificates } from './components/sertificates';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: 'app-sertificates',
	directives: [Sertificates],
	providers: [SertificatesService],
	template:`
		<div>
			<sertificates></sertificates>
		</div>
	`
})
class AppSertificates{}

bootstrap(AppSertificates, [HTTP_PROVIDERS])
	.catch(err => console.error(err));