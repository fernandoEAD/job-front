import { AdminReadComponent } from './components/views/cadastro/admin-read/admin-read.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/views/home/home.component';
import { CadastroReadComponent } from './components/views/cadastro/cadastro-read/cadastro-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CadastroCreateComponent } from './components/views/cadastro/cadastro-create/cadastro-create.component';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastroDeleteComponent } from './components/views/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroUpdateComponent } from './components/views/cadastro/cadastro-update/cadastro-update.component';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatRadioModule } from '@angular/material/radio';
import { AdminCreateComponent } from './components/views/cadastro/admin-create/admin-create.component';
import { LoginComponent } from './components/views/cadastro/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CadastroReadComponent,
    CadastroCreateComponent,
    CadastroDeleteComponent,
    CadastroUpdateComponent,
    AdminReadComponent,
    AdminCreateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
