import { TestBed, inject } from '@angular/core/testing';

import { ConfirmActionComponent } from './confirm-action.component';

describe('a confirm-action component', () => {
	let component: ConfirmActionComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ConfirmActionComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ConfirmActionComponent], (ConfirmActionComponent) => {
		component = ConfirmActionComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});