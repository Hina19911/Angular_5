import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
   // Inject the data storage service for saving/fetching recipes
  constructor(private dataStorageService: DataStorageService){}
   // Called when "Save Data" is clicked in the dropdown
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  // Called when "Fetch Data" is clicked in the dropdown
  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }
}
