import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SolutiondevopstestWebPartStrings';
import Solutiondevopstest from './components/Solutiondevopstest';
import { ISolutiondevopstestProps } from './components/ISolutiondevopstestProps';

export interface ISolutiondevopstestWebPartProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
}


export default class SolutiondevopstestWebPart extends BaseClientSideWebPart<ISolutiondevopstestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISolutiondevopstestProps> = React.createElement(
      Solutiondevopstest,
      {
        description: this.properties.description,
         test:this.properties.test,
         test1:this.properties.test1, 
         test2:this.properties.test2,
         test3:this.properties.test3
      }
    );
       
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

 
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
              PropertyPaneTextField('description', {
                label: 'Description'
              }),
              PropertyPaneTextField('test', {
                label: 'Multi-line Text Field',
                multiline: true
              }),
              PropertyPaneCheckbox('test1', {
                text: 'Checkbox'
              }),
              PropertyPaneDropdown('test2', {
                label: 'Dropdown',
                options: [
                  { key: '1', text: 'One' },
                  { key: '2', text: 'Two' },
                  { key: '3', text: 'Three' },
                  { key: '4', text: 'Four' }
                ]}),
              PropertyPaneToggle('test3', {
                label: 'Toggle',
                onText: 'On',
                offText: 'Off'
              })
            ]
            }
          ]
        }
      ]
    };
  }
  }
  
