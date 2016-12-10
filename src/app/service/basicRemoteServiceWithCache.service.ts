import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ExampleModel } from '../model/somemodel/exampleModel';

@Injectable()
export class BasicRemoteServiceWithCache {

    private _http: Http;
    private _config: Config;

    private _dataCache: Array<ExampleModel> = null;
    private _examplesSubject: ReplaySubject<Array<ExampleModel>> = new ReplaySubject<Array<ExampleModel>>();

    constructor(http: Http, config: Config) {
        this._config = config;
        this._http = http;
    }

    public getExampleData(): ReplaySubject<Array<ExampleModel>> {
let x:string = "";
let y: Array<string>;
y.map(str => str.split(" ")).filter(arrtemp => x.replace(" ", ".+").match(arrtemp.reduce((a, b) => a += b)) != null);
        if (this._dataCache === null) {
            this._examplesSubject.next(new Array<ExampleModel>());
            this.getRemoteExamples();
        } else {
            this._examplesSubject.next(this._dataCache);
        }

        return this._examplesSubject;
    }

    private getRemoteExamples() {

        let modelA = <ExampleModel>{ name: 'Ibl', vorname: 'David', grussformel: 'Hallo' };
        let modelB = <ExampleModel>{ name: 'Ohne Name', vorname: 'Person', grussformel: 'Huhu' };

        Observable.create(subscriber => {
            subscriber.next(new Array(modelA, modelB));
            subscriber.complete();
        }).subscribe(data => {
            this._dataCache = data;
            this._examplesSubject.next(this._dataCache);
        });

        // example of remote query against server needs server with REST api!

        //this._http.get(this._config.getRemoteUrlBase() + '/api/examples/')
        //        .map(result => <Array<ExampleModel>>result.json())
        //        .subscribe(questionSets => this._examplesSubject.next(questionSets));
    }

}
