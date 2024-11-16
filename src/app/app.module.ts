import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './certinatal/components/notfound/notfound.component';
import { ProductService } from './certinatal/service/product.service';
import { CountryService } from './certinatal/service/country.service';
import { CustomerService } from './certinatal/service/customer.service';
import { EventService } from './certinatal/service/event.service';
import { IconService } from './certinatal/service/icon.service';
import { NodeService } from './certinatal/service/node.service';
import { PhotoService } from './certinatal/service/photo.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
