/*
    Copyright (C) 2017 Red Hat, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, BsDropdownModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

import { environment } from '../../../environments/environment';
import { DocumentManagementService } from './services/document-management.service';
import { MappingManagementService } from './services/mapping-management.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { InitializationService } from './services/initialization.service';

import { DataMapperAppExampleHostComponent } from './components/data-mapper-example-host.component';
import { DataMapperAppComponent } from './components/data-mapper-app.component';
import { DataMapperErrorComponent } from './components/data-mapper-error.component';
import { ModalWindowComponent, EmptyModalBodyComponent } from './components/modal-window.component';
import { ToolbarComponent } from './components/toolbar.component';
import { TemplateEditComponent } from './components/template-edit.component';
import { LineMachineComponent } from './components/line-machine.component';
import { CollapsableHeaderComponent } from './components/collapsable-header.component';

import { DocumentDefinitionComponent } from './components/document-definition.component';
import { DocumentFieldDetailComponent } from './components/document-field-detail.component';
import { PropertyFieldEditComponent } from './components/property-field-edit.component';
import { ConstantFieldEditComponent } from './components/constant-field-edit.component';
import { FieldEditComponent } from './components/field-edit.component';
import { NamespaceEditComponent } from './components/namespace-edit.component';
import { MappingListComponent } from './components/mapping/mapping-list.component';
import { MappingListFieldComponent } from './components/mapping/mapping-list-field.component';
import { NamespaceListComponent } from './components/namespace-list.component';
import { MappingDetailComponent } from './components/mapping/mapping-detail.component';
import { CollectionMappingComponent } from './components/mapping/collection-mapping.component';
import { SimpleMappingComponent } from './components/mapping/simple-mapping.component';
import { MappingPairDetailComponent } from './components/mapping/mapping-pair-detail.component';
import { MappingFieldDetailComponent } from './components/mapping/mapping-field-detail.component';
import { MappingFieldActionComponent } from './components/mapping/mapping-field-action.component';
import { MappingSelectionComponent } from './components/mapping/mapping-selection.component';
import { MappingSelectionSectionComponent } from './components/mapping/mapping-selection-section.component';
import { LookupTableComponent } from './components/mapping/lookup-table.component';
import { TransitionSelectionComponent } from './components/mapping/transition-selection.component';
import { FocusDirective } from './common/focus.directive';

// export services/types for consumers of this module
export { ApiXsrfInterceptor } from './services/api-xsrf-interceptor.service';
export { ErrorHandlerService } from './services/error-handler.service';
export { DocumentManagementService } from './services/document-management.service';
export { MappingManagementService } from './services/mapping-management.service';
export { InitializationService } from './services/initialization.service';
export { DocumentDefinition } from './models/document-definition.model';
export { MappingDefinition } from './models/mapping-definition.model';
export { DocumentType, InspectionType } from './common/config.types';
export { ConfigModel, DocumentInitializationModel } from './models/config.model';
export { MappingModel } from './models/mapping.model';
export { MappingSerializer } from './services/mapping-serializer.service';

import { ToErrorIconClassPipe } from './common/to-error-icon-class.pipe';
import { ApiXsrfInterceptor } from './services/api-xsrf-interceptor.service';

export { DataMapperAppComponent } from './components/data-mapper-app.component';

export const typeaheadModuleForRoot: ModuleWithProviders = TypeaheadModule.forRoot();
export const tooltipModuleForRoot: ModuleWithProviders = TooltipModule.forRoot();
export const bsDropdownModuleForRoot: ModuleWithProviders = BsDropdownModule.forRoot();
export const httpClientXsrfModuleForRoot: ModuleWithProviders = HttpClientXsrfModule.withOptions(environment.xsrf);
export const alertModuleForRoot: ModuleWithProviders = AlertModule.forRoot();

// @dynamic
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    typeaheadModuleForRoot,
    tooltipModuleForRoot,
    bsDropdownModuleForRoot,
    httpClientXsrfModuleForRoot,
    alertModuleForRoot
  ],
  declarations: [
    DataMapperAppComponent,
    DocumentDefinitionComponent,
    MappingDetailComponent,
    SimpleMappingComponent,
    CollectionMappingComponent,
    MappingPairDetailComponent,
    ModalWindowComponent,
    DataMapperAppExampleHostComponent,
    MappingFieldActionComponent,
    MappingFieldDetailComponent,
    DocumentFieldDetailComponent,
    DataMapperErrorComponent,
    TransitionSelectionComponent,
    LineMachineComponent,
    MappingSelectionComponent,
    MappingSelectionSectionComponent,
    ToolbarComponent,
    LookupTableComponent,
    EmptyModalBodyComponent,
    FieldEditComponent,
    NamespaceEditComponent,
    PropertyFieldEditComponent,
    ConstantFieldEditComponent,
    CollapsableHeaderComponent,
    MappingListComponent,
    MappingListFieldComponent,
    NamespaceListComponent,
    TemplateEditComponent,
    FocusDirective,
    ToErrorIconClassPipe
  ],
  exports: [
    DataMapperAppExampleHostComponent,
    ModalWindowComponent,
    DataMapperAppComponent,
    AlertModule
  ],
  providers: [
    DocumentManagementService,
    MappingManagementService,
    ErrorHandlerService,
    InitializationService,
  ],
  entryComponents: [
    MappingSelectionComponent,
    LookupTableComponent,
    EmptyModalBodyComponent,
    FieldEditComponent,
    NamespaceEditComponent,
    PropertyFieldEditComponent,
    ConstantFieldEditComponent,
    TemplateEditComponent,
  ],
  bootstrap: [DataMapperAppExampleHostComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DataMapperModule {
  static withInterceptor(): Array<ModuleWithProviders> {
    return [{
      ngModule: DataMapperModule,
      providers: [
        DocumentManagementService,
        MappingManagementService,
        ErrorHandlerService,
        InitializationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiXsrfInterceptor,
          multi: true
        },
      ],
    }];
  }
}
