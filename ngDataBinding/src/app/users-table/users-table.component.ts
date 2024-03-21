import { Component, Input } from "@angular/core";
import { User } from "../user-interface";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.css",
})
export class UsersTableComponent {
  @Input() usersTb: User[] = [];
  isEdited: boolean = true;

  onEditClick(): boolean {
    return (this.isEdited = !this.isEdited);
  }

  oncancelClick(): boolean {
    return (this.isEdited = !this.isEdited);
  }
  onAcceptEdit(index: number, name: string, number: string, email: string) {
    this.usersTb[index].name = name;
    this.usersTb[index].cellNumber = number;
    this.usersTb[index].email = email;
    this.onEditClick();
  }
}
