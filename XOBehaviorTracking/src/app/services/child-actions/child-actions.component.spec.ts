import { TestBed, inject } from '@angular/core/testing';

import { ChildActionsService } from './child-actions.service';

describe('a child-actions component', () => {
	let component: ChildActionsService;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChildActionsService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChildActionsService], ChildActionsComponent => {
        component = ChildActionsComponent;
    }));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});