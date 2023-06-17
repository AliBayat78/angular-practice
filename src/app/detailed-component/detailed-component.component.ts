import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-component.component.html',
  styleUrls: ['./detailed-component.component.scss'],
})
export class DetailedComponentComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  public urlId: string | null = '';

  ngOnInit() {
    // let componentId = this.route.snapshot.paramMap.get('id');
    // this.urlId = componentId;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let newId = params.get('id')
      this.urlId = newId
    });
  }

  goNext() {
    let newId = Number(this.urlId) + 1;
    this.router.navigate(['/test', newId]);
  }

  goPrevious() {
    let newId = Number(this.urlId) - 1;
    this.router.navigate(['/test', newId]);
  }
}
