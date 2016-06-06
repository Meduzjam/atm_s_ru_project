export class SertificateModel {
	constructor(
		private Title: string,
		private Type: string,
		private id: number,
		private File: string
		) {
	}

	static fromJSON(json: ISertificateModel[]): SertificateModel[] {
		
		return json.map(
			function(el: ISertificateModel) {
				let obj = Object.create(SertificateModel.prototype);
				Object.assign(obj, el);
				return obj;
			})
    }

    Test(){
		return "all good";
    }

    isCurrent(cur: SertificateModel) {
		return this == cur? " active":"";
    }

}

interface ISertificateModel {
	Title: string, 
	Type: string,
	id: number,
	File: number
}