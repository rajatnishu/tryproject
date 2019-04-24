


import { Component } from "@angular/core";

import {Router , ActivatedRoute , Params } from "@angular/router";
declare var $ : any;

@Component({
    selector: "app-groceries",
    templateUrl:"groceries.component.html",
})

export class groceriesComponent { 
    constructor  (private activatedRoute: ActivatedRoute, private router: Router){}
    }


