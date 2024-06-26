import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tariffs } from '../model/tariff-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TariffDetailsService {

  private tariffs = [
    {
        "id": 1,
        "name": "Tarif Name a",
        "downloadSpeed": 12000000,
        "uploadSpeed": 6000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3",
            "Tarif benefit 4"
        ],
        "price": 123.45
    },
    {
        "id": 2,
        "name": "Tarif Name b",
        "downloadSpeed": 12000000,
        "uploadSpeed": 6000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3"
        ],
        "price": 123.45
    },
    {
        "id": 3,
        "name": "Tarif Name c",
        "downloadSpeed": 10000000,
        "uploadSpeed": 4000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3",
            "Tarif benefit 4"
        ],
        "price": 90.00
    },
    {
        "id": 4,
        "name": "Tarif Name d",
        "downloadSpeed": 8000000,
        "uploadSpeed": 2000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2"
        ],
        "price": 70.00
    },
    {
        "id": 5,
        "name": "Tarif Name e",
        "downloadSpeed": 12000000,
        "uploadSpeed": 7000000,
        "benefits": [
            "Tarif benefit 1",
            "Tarif benefit 2",
            "Tarif benefit 3",
            "Tarif benefit 4"
        ],
        "price": 120.00
    }
];

  constructor() { }

  getTariffDetailsData(): Observable<Tariffs[]>{
    return  of(this.tariffs); 
  }
}
