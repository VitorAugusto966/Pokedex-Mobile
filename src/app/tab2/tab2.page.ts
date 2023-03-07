import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = "https://pokeapi.co/api/v2/pokemon/";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public pokes: any = [];
  public pageAtual: any = 1;

  constructor(private http: HttpClient,) {
     this.get(this.pageAtual);
  }

  public async next() {
    this.pokes = [];
    console.log("Entrou")
    this.pageAtual = this.pageAtual + 1;
    await this.get(this.pageAtual);
  }
   public async previous() {
    
    if (this.pageAtual != 1) {
      this.pokes = [];
      this.pageAtual = this.pageAtual - 1;
      await this.get(this.pageAtual);
    }
  }


  async get(page: any) {
    
    this.pageAtual = page;
    if (page == 1) {
      page = 1;
    }
    else {
      page = page * 21
    }

    if (this.pageAtual == 1) {
      for (let i = page; i <= page * 21; i++) {
        await this.http.get(`${urlBase}` + i).toPromise()
          .then((result) => {
            this.pokes.push(result);
          })
      }
    }
    else {
      for (let i = page; i <= page * 2; i++) {
        await this.http.get(`${urlBase}` + i).toPromise()
          .then((result) => {
            this.pokes.push(result);
          })
      }
    }

    console.log(this.pokes)


  }

  /* async getImage()
   {
     await this.get();
 
    // if(this.pokes.result != undefined )
   //  {
       for(let poke of this.pokes.result)
       {
         await this.http.get(poke.url).toPromise()
         .then((result)=>
         {
           console.log(result);
           console.log("entrou");
           this.img.push(result);
         })
       }
    // }
     
     }*/


}
