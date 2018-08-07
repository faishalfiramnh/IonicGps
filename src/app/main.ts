import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import  { DashboardPage} from'../pages/dashboard/dashboard';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
