import { Component, ElementRef, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { LineComponent } from "../line/line.component";

interface Iphoto {
  userId: number
  title: string
}

@Component({
  selector: 'app-portfolio',
  imports: [LineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

photoList:Iphoto[]=[

{"userId":1,
  "title":"/image/poert1.png"

},{"userId":2,
  "title":"/image/port2.png"

},{"userId":3,
  "title":"/image/port3.png"

},
{"userId":4,
  "title":"/image/poert1.png"

},{"userId":5,
  "title":"/image/port2.png"

},{"userId":6,
  "title":"/image/port3.png"

}


];
phptpdetaiels:Iphoto={
  userId: 0,
  title: ''
}

  @ViewChildren('el') myElements!: QueryList<ElementRef>
  showelent(hamada:Iphoto): void {
  
    console.log(hamada)
     this.phptpdetaiels=hamada;
     
  }
}
