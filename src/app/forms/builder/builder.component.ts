import { FormioRefreshValue, FormBuilderComponent, FormioUtils } from '@formio/angular';
import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Input } from '@angular/core';
import { PrismService } from '../../Prism.service';
//import { KycForm, KycComp } from './kycform.component';
import { JsonProperty, ObjectMapper } from 'json-object-mapper';
//import FormioUtils from 'formiojs/utils';
//import { FormBuilder, Utils } from 'formiojs';
import _ from "lodash";
import { turquoise } from 'color-name';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  
  //@Input() builder?: any;

  public form: any;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService) {
    //this.form = {components: []};
    this.form = {
        "components": [
            {
                "title": "General",
                "collapsible": false,
                "key": "general",
                "type": "panel",
                "label": "Panel",
                "input": false,
                "tableView": false,
                "components": [
                    {
                        "label": "First Name",
                        "tableView": true,
                        "key": "firstName",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Age",
                        "mask": false,
                        "spellcheck": true,
                        "tableView": false,
                        "delimiter": false,
                        "requireDecimal": false,
                        "inputFormat": "plain",
                        "key": "age",
                        "type": "number",
                        "input": true
                    }
                ]
            },
            {
                "title": "Experience",
                "collapsible": false,
                "key": "experience",
                "type": "panel",
                "label": "Panel",
                "input": false,
                "tableView": false,
                "components": [
                    {
                        "label": "No of years of experience",
                        "optionsLabelPosition": "right",
                        "inline": true,
                        "tableView": false,
                        "defaultValue": {
                            "": false
                        },
                        "values": [
                            {
                                "label": "3+",
                                "value": "3",
                                "shortcut": ""
                            },
                            {
                                "label": "8+",
                                "value": "8",
                                "shortcut": ""
                            },
                            {
                                "label": "10+",
                                "value": "10",
                                "shortcut": ""
                            }
                        ],
                        "key": "noOfYearsOfExperience",
                        "type": "selectboxes",
                        "input": true,
                        "inputType": "checkbox"
                    }
                ]
            },
            {
                "type": "button",
                "label": "Submit",
                "key": "submit",
                "disableOnInvalid": true,
                "input": true,
                "tableView": false
            }
        ]
    };
  //
  }


  getComponentKeys(components): any {
       const keys = [];
       FormioUtils.eachComponent(components, (component) => {
         if (!_.isUndefined(component.key) && !_.isNull(component.key)) {
           keys.push(component.key);
         }
       }, true);
       return _(keys);
  }
  

  onChange(event) {
    //console.log(event);
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
    

    /* let formApi = event.form; */
    /* formApi.loadForm().then(function(form) { */
    /*   console.log(form) */
    /* }); */
    //console.log("Something changed on the form builder " + JSON.stringify(event.builder.schema));
    
    const componentKeys = this.getComponentKeys(event.builder.form.components);
    
    //console.log(componentKeys.values());
    if (_.isArray(_.chain(componentKeys).value())) {       
        _.forEach(_.chain(componentKeys).value(), function(value) {
            //console.log(value);
        });
    }
    
    if (!_.isUndefined(event.builder.form) && !_.isNull(event.builder.form)) {
        var flattened = FormioUtils.flattenComponents(event.builder.form.components, true);
        //console.log('flattened=>' + flattened['myNestedComponent']);
    }
    
    

    /*var builder = Formio.builder(document.getElementById('builder'), {}, {});

    console.log("Something changed on the form builder");
    var jsonSchema = JSON.stringify(builder.instance.schema, null, 4);
    console.log(jsonSchema);


    FormioUtils.eachComponent(event.form.components, (component) => {
        console.log('schema=>' + component.schema);
      });

    var flattened = FormioUtils.flattenComponents(event.form.components);
    console.log('flattened=>' + flattened['myNestedComponent'])  */

  }

  
  ngAfterViewInit() {
    this.prism.init();    
    //console.log(this.form);
    let testInstance: FormComponent = ObjectMapper.deserialize(FormComponent, this.form);
    //console.log(testInstance);
    
    let stringrified: String = ObjectMapper.serialize(testInstance);
    //console.log(stringrified);
  }
}

class FormComponent {
    type: string = undefined;
    key: string = undefined;
    label: string = undefined;
    @JsonProperty({type: FormComponent, name: 'components'})
    components: FormComponent[] = undefined;
}
