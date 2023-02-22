import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

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
}


