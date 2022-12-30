import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
const urlBase = "https://pokeapi.co/api/v2/pokemon/";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  
  public pokemon:any = {};

  constructor(private http: HttpClient) {
    this.pokemon = null;
    console.log(this.pokemon);
  }

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();

    
    //console.log(query);
    //console.log(query.length);
    if(query.length>= 3)
    {
      this.http.get(`${urlBase}` + query).toPromise()
      .then((result) => {
        this.pokemon = result
      })
      .catch((error)=>
      {
        this.pokemon = null;
          console.log("pokemon n encontrado")
      })
    }

    
  }

}
