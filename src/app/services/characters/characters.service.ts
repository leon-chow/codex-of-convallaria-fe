import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { of } from 'rxjs';
import { ICharacter } from '../../models/character';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  token = "qhp9Fi53DlPzz7U3kD0AfkQVrYd1Mz4kT2QC8IFIVDnefPVfm5r35QALs3Wjdb6k";
  header = new HttpHeaders({ 
    'Authorization': `Bearer ${this.token}`, 
  });

  constructor(private http: HttpClient, private fetchService: FetchService) { 

  }

  getCharacters() {
    const path = `/characters`;
    return this.fetchService.get(path); 
  }
}
