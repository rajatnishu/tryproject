import { Component } from "@angular/core";

import {Router , ActivatedRoute , Params } from "@angular/router";
declare var $ : any;

@Component({
    selector: "app-navbar",
    templateUrl:"navbar.component.html",
})

export class navbarComponent { 
    constructor  (private activatedRoute: ActivatedRoute, private router: Router){}
    }

