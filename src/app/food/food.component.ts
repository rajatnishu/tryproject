import { Component } from "@angular/core";

import {Router , ActivatedRoute , Params } from "@angular/router";
declare var $ : any;

@Component({
    selector: "app-food",
    templateUrl:"food.component.html",
})

export class foodComponent { 
    constructor  (private activatedRoute: ActivatedRoute, private router: Router){}
    }

