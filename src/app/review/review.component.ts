import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  public reviews = [{
    image:'https://wordpress.iqonic.design/product/wp/sofbox/wp-content/uploads/2021/11/Ellipse-28-1.png',
    fullName:'Jane Cooper',
    position:"CEO",
    text:'“Connects to Shopify and sends out abandoned cart texts in under 5 minutes. How can something so powerful be so simple? @iqonicdesign extraordinary design”',
    star: 4,
    companyLogo:""
  },{
    image:'https://wordpress.iqonic.design/product/wp/sofbox/wp-content/uploads/2020/02/Ellipse-53.png',
    fullName:'John Deo',
    position:"CEO",
    text:'“Connects to Shopify and sends out abandoned cart texts in under 5 minutes. How can something so powerful be so simple? @iqonicdesign extraordinary design”',
    star: 4,
    companyLogo:""
  },{
    image:'https://wordpress.iqonic.design/product/wp/sofbox/wp-content/uploads/2020/02/Ellipse-50.png',
    fullName:'Kips Leo',
    position:"CEO",
    text:'“Connects to Shopify and sends out abandoned cart texts in under 5 minutes. How can something so powerful be so simple? @iqonicdesign extraordinary design”',
    star: 4,
    companyLogo:""
  },{
    image:'https://wordpress.iqonic.design/product/wp/sofbox/wp-content/uploads/2020/02/Ellipse-52.png',
    fullName:'Boris Akunin',
    position:"CEO",
    text:'“Connects to Shopify and sends out abandoned cart texts in under 5 minutes. How can something so powerful be so simple? @iqonicdesign extraordinary design”',
    star: 4,
    companyLogo:""
  }
]
}
