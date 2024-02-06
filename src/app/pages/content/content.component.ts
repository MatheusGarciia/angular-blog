import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription1: string = '';
  contentDescription2: string = '';
  contentDescription3: string = '';
  private id: string | null = '0';
  githubBoolean: boolean = false;
  github__link: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription1 = result.description1;
    this.contentDescription2 = result.description2;
    this.contentDescription3 = result.description3;
    this.photoCover = result.photoCover;
    this.githubBoolean = result.githubBoolean;
    this.github__link = result.github;
  }
}
