import { Component } from "@angular/core";

import {Router , ActivatedRoute , Params } from "@angular/router";
declare var $ : any;

@Component({
    selector: "app-homepage",
    templateUrl:"homepage.component.html",
})

export class homepageComponent { 
    constructor  (private activatedRoute: ActivatedRoute, private router: Router){}


    move(){
        this.router.navigate(['food'])
    }

    groceries(){
        this.router.navigate(['groceries'])
    }
    }

