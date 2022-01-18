import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  dataUser:any;
  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
    this.dataUserFunction()
  }

   dataUserFunction(){
     this.demoService.getFoods().subscribe(
      (res) => {
        console.log(res,"team")
        this.dataUser = res;
      },
      (err) => {
        console.error(err);
      }
     )

   }
}
