import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {
    @Input()
    title: string;

    @Input()
    zoom: number;

    @Input()
    locations: any;
}
