import { Component, OnInit } from '@angular/core';
import {Constants} from "../../utils/constants";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
  }

}
