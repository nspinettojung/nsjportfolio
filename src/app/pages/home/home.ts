import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { About } from "../about/about";

@Component({
  selector: 'app-home',
  imports: [Navbar, About],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
