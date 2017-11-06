	import './support/gentypes';
	import { Proxy } from './support/proxy';

	export class ProcessConnection  {

		___nsuri: string = "http://specmate.com/20170409/model/processes";
		public url: string;
		public className: string = "ProcessConnection";
		public static className: string = "ProcessConnection";

		// Attributes
		public id: EString;
		public name: EString;
		public description: EString;
		public condition: EString;

		// References
		
		public source: Proxy;
		public target: Proxy;


	}
