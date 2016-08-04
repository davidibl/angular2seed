import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { BasicRemoteServiceWithCache } from '../../service/basicRemoteServiceWithCache.service';
import { ExampleModel } from '../../model/somemodel/exampleModel';

@Component({
    moduleId: __moduleName,
    selector: 'sample-body',
    templateUrl: 'samplebody.html'
})
export class SampleBodyComponent implements OnInit {

    public examples: Array<ExampleModel>;
    private _service: BasicRemoteServiceWithCache;

    constructor(service: BasicRemoteServiceWithCache) {
        this._service = service;
    }

    ngOnInit() {
        this._service.getExampleData().subscribe(examples => this.examples = examples);
    }

}
