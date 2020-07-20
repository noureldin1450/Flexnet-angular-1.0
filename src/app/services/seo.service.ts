import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private Seotitle:Title, private Seometa:Meta) {}

  title:string = 'Flexnet - watch free cinema movies online. flexnet free new movies online';
  dis:string = 'Flexnet - Free online new movies. watch free flexnet cinema movies online watch and download movies';
  keywords:string = 'flexnet movies,movies flex.net,flexnet free movies,flexnet movie,movie flex.net,films,watch movies,flexnet,flexnet.ga,موقع افلام عربية حديثة اون لاين ,موقع افلام بدون تحميل,مواقع افلام مترجمة اون لاين,افضل مواقع افلام الاكشن,احسن موقع افلام,افضل مواقع لمشاهدة الافلام اون لاين افضل,موقع للأفلام,احدث مواقع الافلام,new movies,flexnet,movies to watch,movies to watch with friends,free movies cinema,free movies cinema cinema movies stream,watch free cinema movies streaming';


  SEO(title?:string, description?:string, poster?:string){
    this.addtitle(title);
    this.addingdis(description, poster);
  }


  addtitle(title?:string){
    return(
      this.Seotitle.setTitle(title || this.title),

      this.Seometa.addTags([
        { name:'og:title', content: title || this.title }
      ])
    );
    }
    
  addingdis(description?:string, poster?:string){
    return this.Seometa.addTags([
      { name:'description', content: description || this.dis },
      { name:'og:description', content: description || this.dis },
      { name:'keywords', content: this.keywords },
      { name:'og:type', content: 'website' },
      { name:'og:site_name', content: 'Flexnet.ga' },
      { name:'application-name', content: 'Flexnet' },
      { name:'og:image', content: poster || 'https://flexnet.ga/assets/images/logo/loading.gif' },
      { name:'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name:'theme-color', content: 'f95959' },
      { name:'msapplication-navbutton-color', content: 'f95959' },
      { name:'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name:'google-site-verification', content: '9MmS6V6YaKuaxUL2Cbxrf1UgIPJ50TbM8_gidwrrLMg' },
      { charset: 'UTF-8' }
    ]); 
  }

}
