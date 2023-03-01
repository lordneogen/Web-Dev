import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product, products} from '../products';
import {ToolBarComponent} from "../tool-bar/tool-bar.component";
import { ActivatedRoute } from '@angular/router';
import {LikeService} from "../like.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  products_phones = products;

  type=1;
  products_type: number | undefined;
  constructor(

    private route: ActivatedRoute,

    public likeService: LikeService,

    private cartService: CartService
  ) {

    this.type = this.route.snapshot.data['type'];

  }
  ngOnInit(): void {
    this.products_type=this.type;
  }
  share(url: string, title: string): string {
    function openLink(url: string, newTab = true): void {
      if (newTab) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
    const telegramUrl = 'https://t.me/share/url';
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const shareUrl = `${telegramUrl}?url=${encodedUrl}&text=${encodedTitle}`;
    openLink(shareUrl,false);
    return shareUrl;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  openlink(link:string){
    window.open(link)
  }
}
