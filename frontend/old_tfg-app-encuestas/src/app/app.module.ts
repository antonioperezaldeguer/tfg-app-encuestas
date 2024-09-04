import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    //se añaden aquí los componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //Se añade aquí otros modulos necesarios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
