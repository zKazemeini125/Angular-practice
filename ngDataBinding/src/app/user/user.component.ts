import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../user-interface";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  users: User[] = [
    {
      name: "نیما",
      cellNumber: "0712345678",
      email: "nima@mail.com",
    },
    {
      name: "شیما",
      cellNumber: "0712345678",
      email: "shima@mail.com",
    },
    {
      name: "سینا",
      cellNumber: "0712345678",
      email: "sina@mail.com",
    },
  ];

  onAddUser(name: string, cellnumber: string, email: string, e: Event) {
    e.preventDefault();
    this.users.push({
      name: name,
      cellNumber: cellnumber,
      email: email,
    });
  }
}
