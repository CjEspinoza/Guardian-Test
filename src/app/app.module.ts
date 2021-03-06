import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { AdminComponent } from './admin/admin.component';

import { environment } from 'environments/environment.prod';
import { ItemsComponent } from './items/items.component';
import {ItemService} from './_services/item.service';
import { AddPostComponent } from './add-post/add-post.component';
import { AboutComponent } from './tournament/about/about.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { TournamentFeatureComponent } from './tournament/tournament-feature/tournament-feature.component';
import { TournamentInfoComponent } from './tournament/tournament-info/tournament-info.component';
import { TournamentFooterComponent } from './tournament/tournament-footer/tournament-footer.component';
import { UpdatePageComponent } from './announcement/update-page/update-page.component';
import { ContactComponent } from './contact/contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { BulletinComponent } from './bulletin/bulletin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        AngularFireModule.initializeApp(environment.firebase,'angularfs'),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        FormsModule,
        Ng2SearchPipeModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        ItemsComponent,
        AddPostComponent,
        AboutComponent,
        TournamentHomeComponent,
        TournamentFeatureComponent,
        TournamentInfoComponent,
        TournamentFooterComponent,
        UpdatePageComponent,
        ContactComponent,
        UserProfileComponent,
        BulletinComponent,
        SideNavComponent,
        ScrollTopComponent,

       
    ],
    providers: [
        ItemService,AuthenticationService,AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };