webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: `
	  <nav></nav>
	  <router-outlet></router-outlet>
  `,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_component__ = __webpack_require__("../../../../../src/app/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_messages_component__ = __webpack_require__("../../../../../src/app/new-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_component__ = __webpack_require__("../../../../../src/app/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















const firebaseConfig = {
    apiKey: "AIzaSyDsu8AWNy-nnjvRSTwj0Zy-4qD2xrzDlnQ",
    authDomain: "angularchatapp88.firebaseapp.com",
    databaseURL: "https://angularchatapp88.firebaseio.com",
    projectId: "angularchatapp88",
    storageBucket: "",
    messagingSenderId: "335624676943"
};
/* unused harmony export firebaseConfig */

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__home_component__["a" /* HomeComponent */]
    },
    {
        path: 'messages/:user',
        component: __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */]
    },
    {
        path: 'message',
        component: __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__login_component__["a" /* LoginComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_13__user_component__["a" /* UserComponent */]
    },
];

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__new_messages_component__["a" /* NewMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["e" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_16__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:63145/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get tokenHeader() {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
        console.log("header", header);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
    }
    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            console.log(res);
            this.authenticate(res);
        });
    }
    register(user) {
        delete user.comfirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }
    authenticate(res) {
        console.log(res);
        var authResponse = res.json();
        if (!authResponse.token)
            return;
        localStorage.setItem(this.TOKEN_KEY, res.json().token);
        localStorage.setItem(this.NAME_KEY, res.json().firstName);
        this.router.navigate[('/')];
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
], AuthService);



/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'home',
        template: `
	  <new-messages ></new-messages>
	  <messages></messages>
  `,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LoginComponent = class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.loginData = {
            "email": '',
            "password": ''
        };
    }
    login() {
        this.auth.login(this.loginData);
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',
        template: `
  	<mat-card>
      <form (ngSubmit)="login()">
        <mat-form-field >
          <input style="width:350px" [(ngModel)]="loginData.email" type='email' matInput placeholder="Email" [ngModelOptions]="{standalone: true}" >
        </mat-form-field >
        <mat-form-field >
          <input style="width:350px" [(ngModel)]="loginData.password" type='password' matInput placeholder="Password" [ngModelOptions]="{standalone: true}" >
        </mat-form-field >
        
        <button mat-raised-button color="primary">Login</button>
      </form>
    </mat-card>

  `,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
], LoginComponent);



/***/ }),

/***/ "../../../../../src/app/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MessagesComponent = class MessagesComponent {
    constructor(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    ngOnInit() {
        var name = this.route.snapshot.params.user;
        (name) ? this.webService.getMessages(name) : this.webService.getAllMessages();
        this.webService.getUser().subscribe();
    }
};
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'messages',
        template: `
  	<div *ngFor="let message of webService.messages | async ">
  		<mat-card class="card">
  		<mat-card-title [routerLink]="['/messages/', message.user]" style="cursor:pointer"> {{message.user}}</mat-card-title>
  		<mat-card-content> {{message.text}} </mat-card-content>
  		</mat-card>
  	</div>
  `,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
], MessagesComponent);



/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NavComponent = class NavComponent {
    constructor(auth) {
        this.auth = auth;
    }
};
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav',
        template: `
  	<mat-toolbar color="primary">
    	<button mat-button routerLink="/"> Message Board</button>
    	<button mat-button routerLink="/message">Message</button>
    	<span style="flex: 1 1 auto"></span>
    	<button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
    	<button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
    	<button *ngIf="auth.isAuthenticated" mat-button routerLink="/"> Welcome {{auth.name}} </button>
    	<button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Log out</button>
    </mat-toolbar>
  `,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
], NavComponent);



/***/ }),

/***/ "../../../../../src/app/new-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NewMessagesComponent = class NewMessagesComponent {
    constructor(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.message = {
            user: this.auth.name,
            text: ""
        };
    }
    post() {
        this.webService.postMessage(this.message);
    }
};
NewMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'new-messages',
        template: `
    <mat-card class="card"  >
    <mat-card-content>
      <mat-form-field >
        <input [(ngModel)]="message.user" matInput placeholder="Name" >
      </mat-form-field>

      <mat-form-field class="commentbox">
        <textarea matInput  [(ngModel)]="message.text" placeholder="Leave a comment" ></textarea>
      </mat-form-field>
      <button (click)="post()" color="primary" mat-button>
        POST
      </button>
     </mat-card-content>
  </mat-card>

  `,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], NewMessagesComponent);



/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field >\r\n      <input style=\"width:350px\" [ngClass]=\"{'error':isValid('firstName')}\" matInput placeholder=\"First Name\" formControlName=\"firstName\" >\r\n    </mat-form-field >\r\n    <mat-form-field >\r\n      <input style=\"width:350px\" [ngClass]=\"{'error':isValid('lastName')}\"  matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n    </mat-form-field >\r\n    <mat-form-field >\r\n      <input style=\"width:350px\" [ngClass]=\"{'error':isValid('email')}\"  matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n    </mat-form-field >\r\n    <mat-form-field >\r\n      <input style=\"width:350px\" [ngClass]=\"{'error':isValid('password')}\"  matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    </mat-form-field >\r\n    <mat-form-field >\r\n      <input style=\"width:350px\" [ngClass]=\"{'error':isValid('comfirmPassword')}\"  matInput type=\"password\" placeholder=\" Comfirm Password\" formControlName=\"comfirmPassword\">\r\n    </mat-form-field >\r\n    <br>\r\n    <span *ngIf=\"form.errors?.mismatchedFields\">Passwords do not match</span>\r\n    <br>\r\n    <button mat-raised-button color=\"primary\">Register</button>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RegisterComponent = class RegisterComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, emailValid()]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            comfirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        }, { validator: matchingFields('password', 'comfirmPassword') });
    }
    onSubmit() {
        this.auth.register(this.form.value);
    }
    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'resgister',
        template: __webpack_require__("../../../../../src/app/register.component.html"),
        styles: [`
    .error{ background-color:#fff0f0}

  `]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], RegisterComponent);

function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true };
    };
}
function emailValid() {
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}


/***/ }),

/***/ "../../../../../src/app/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_service__ = __webpack_require__("../../../../../src/app/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserComponent = class UserComponent {
    constructor(webService) {
        this.webService = webService;
        this.model = {
            firstName: "",
            lastName: ""
        };
    }
    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }
    post() {
        this.webService.saveUser(this.model).subscribe();
    }
};
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user',
        template: `
    <mat-card class="card"  >
    <mat-card-content>
      <mat-form-field >
        <input [(ngModel)]="model.firstName" matInput placeholder="First Name" >
      </mat-form-field>

      <mat-form-field class="commentbox">
        <input [(ngModel)]="model.lastName" matInput placeholder="last Name" >
      </mat-form-field>
      <button (click)="post()" color="primary" mat-raised-button>
        Save Changes
      </button>
     </mat-card-content>
  </mat-card>

  `,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__web_service__["a" /* WebService */]])
], UserComponent);



/***/ }),

/***/ "../../../../../src/app/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm2015/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let WebService = class WebService {
    constructor(http, sb, auth) {
        this.http = http;
        this.sb = sb;
        this.auth = auth;
        this.BASE_URL = 'http://localhost:63145/api';
        this.messageStore = [];
        this.messageSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.messages = this.messageSubject.asObservable();
        this.getAllMessages();
    }
    getAllMessages() {
        try {
            var response = this.http.get(this.BASE_URL + '/messages').subscribe(response => {
                this.messageStore = response.json();
                console.log(this.messageStore);
                console.log("get all");
                this.messageSubject.next(this.messageStore);
            });
        }
        catch (error) {
            this.handleError("Unable to get messages");
        }
    }
    getMessages(user) {
        try {
            var user = '/' + user;
            var response = this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messageStore = response.json();
                console.log(this.messageStore);
                console.log("get all");
                this.messageSubject.next(this.messageStore);
            });
        }
        catch (error) {
            this.handleError("Unable to get messages");
        }
    }
    postMessage(message) {
        try {
            var response = this.http.post(this.BASE_URL + '/message', message).subscribe(response => {
                this.messageStore.push(response.json());
                this.messageSubject.next(this.messageStore);
            });
        }
        catch (error) {
            this.handleError("Unable to post message");
        }
    }
    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }
    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(res => res.json());
    }
    handleError(error) {
        console.error(error);
        this.sb.open(error, "close", { duration: 5000 });
    }
};
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
], WebService);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map