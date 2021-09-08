import { Component, OnInit } from '@angular/core';
import { NewscreenService } from './newscreen.service';

@Component({
  selector: 'app-newscreen',
  templateUrl: './newscreen.component.html',
  styleUrls: ['./newscreen.component.scss'],
})

export class NewscreenComponent implements OnInit {
    public sample = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private newscreenService: NewscreenService,
    ) { }

    ngOnInit() {
        this.sample.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.newscreenService.GpCreate(this.sample).subscribe(data => {
            this.sample.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}