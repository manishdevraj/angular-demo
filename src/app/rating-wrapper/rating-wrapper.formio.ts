import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from '@formio/angular';
import { RatingWrapperComponent } from './rating-wrapper.component';


export function minimalRatingEditForm() {
    return {
        components: [
        { key: 'type', type: 'hidden' },
        {
            weight: 0,
            type: 'textfield',
            input: true,
            key: 'label',
            label: 'Label',
            placeholder: 'Label',
            validate: {
            required: true,
            },
        },
        {
            weight: 10,
            type: 'textfield',
            input: true,
            key: 'key',
            label: 'Field Code',
            placeholder: 'Field Code',
            tooltip: 'The code/key/ID/name of the field.',
            validate: {
            required: true,
            maxLength: 128,
            pattern: '[A-Za-z]\\w*',
            patternMessage:
                'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.',
            },
        },
        {
            weight: 20,
            type: 'textfield',
            input: true,
            key: 'customOptions.myOption',
            label: 'My Custom Option',
            placeholder: 'My Custom Option',
            validate: {
            required: true,
            },
        },
        ],
    };
}

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
    type: 'riskrating',
    selector: 'risk-rating',
    title: 'Rating',
    group: 'basic',
    icon: 'star',
    weight: 70
  };
  
export function registerRatingComponent(injector: Injector) {
    registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
}
  
