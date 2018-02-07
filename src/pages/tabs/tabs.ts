import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UploadPage } from "../upload/upload";
import { UserPage} from "../user/user";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UploadPage;
  tab3Root = UserPage;

  constructor() {

  }
}
