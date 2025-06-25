import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Navbar, About, Skills, Projects, Contact],
  templateUrl: './home.html',
  
})
export class Home {

}
