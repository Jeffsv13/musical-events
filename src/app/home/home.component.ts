import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { EventCardComponent } from "../shared/components/event-card/event-card.component";
import { Concert } from '../shared/models/concert.model';

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, FooterComponent, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onSearchValueChange(value:string){
    console.log('new value: ',value);
  }

  temporalData: Concert = {
    id:1,
    title:' AC/DC Rock World tour',
    description: 'AC/DC vuelve al escenario con este tour, no te lo pierdas.',
    extendedDescription:'AC/DC está de regreso con su electrizante Rock the World Tour, una gira que prometeser una de las más épicas',
    place:'Estadio San Marcos',
    unitPrice: 175.0,
    genreId:1,
    genre:'Rock',
    dateEvent:'12/15/2024',
    timeEvent:'19:00',
    imageUrl:'images/ACDC.jpg',
    ticketsQuantity: 85,
    finalized: false,
    status: 'Activo',
  };
}
