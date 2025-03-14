export namespace models {
	
	export class Settings {
	    SelectedCloudProvider: string;
	    SelectedProfile: string;
	
	    static createFrom(source: any = {}) {
	        return new Settings(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SelectedCloudProvider = source["SelectedCloudProvider"];
	        this.SelectedProfile = source["SelectedProfile"];
	    }
	}

}

