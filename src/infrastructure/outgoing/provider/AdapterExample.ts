import { PortExample } from '../../../domain/domain1/example.port.js';

export class AdapterExample implements PortExample {
	public async action(): Promise<void> {
		// Do something
	}
}
