import { Component } from '@angular/core';
import { JsonProperty, ObjectMapper } from 'json-object-mapper';

export class KycForm {
    @JsonProperty()
    private components: KycComp;
}

export class KycComp {
    @JsonProperty()
    private title: String;
    
    @JsonProperty()
    private key: String;

    @JsonProperty()
    private label: String;

    @JsonProperty()
    private components: FormComponent[]
}

export class FormComponent {
    @JsonProperty()
    private title: String;
    
    @JsonProperty()
    private key: String;
    
    @JsonProperty()
    private label: String;        
}