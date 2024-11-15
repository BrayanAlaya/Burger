import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { clases } from '../../Clases';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-ajustes',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule
  ],
  providers:[
    clases
  ],
  templateUrl: './user-ajustes.component.html',
  styleUrl: './user-ajustes.component.scss'
})
export class UserAjustesComponent {

  public ajustesForm: FormGroup
  // public user: User | null
  public srcImage: string = "../../../../../assets/userUnknow.jpg"
  public imageFileNew: any
  public dateValid: boolean | undefined;
  // private token: String | null;
  public status: boolean | undefined
  // public s3Url: string = environment.s3url

  constructor(
    private _fb: FormBuilder,
    private _clases: clases,
    // private _userService: UserService,
  ) {
    // this.user = _userService.getLocalUSer();
    // this.token = _userService.getLocalToken();
    // this.ajustesForm = _fb.group({
    //   name: [this.user?.name, [Validators.required]],
    //   email: [this.user?.email],
    //   birthdate: [new Date(this.user?.birthdate?.replace("Z", "") ?? "")],
    // })
    this.ajustesForm = _fb.group({
      name: ["", [Validators.required]],
      email: [""],
      birthdate: [""],
    })
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {

  }

  onSubmit(): void {

    if (!this.ajustesForm.valid) {
      return;
    }

    const ajustesFormUpdate: FormData = new FormData()
    ajustesFormUpdate.append("name", this.ajustesForm.value.name)
    ajustesFormUpdate.append("image", this.imageFileNew)

    this.updateUser(ajustesFormUpdate)

  }

  updateUser(user: FormData) {
    // this._userService.update(user, this.token).subscribe({
    //   next: ((response: any) => {
    //     if (parseInt(response.status) == 200) {
    //       localStorage.setItem("user", JSON.stringify(response.data))
    //       localStorage.setItem("token", response.token)
    //       this.user = this._userService.getLocalUSer();
    //       this.token = this._userService.getLocalToken();
    //       this.status = true
    //       this.s3Url = environment.s3url
    //     } else if (parseInt(response.status) == 500) {
    //       this.status = false
    //     } else if (parseInt(response.status) == 401) {
    //       this._userService.closeSesion()
    //     }
    //   })
    // })
  }

}
