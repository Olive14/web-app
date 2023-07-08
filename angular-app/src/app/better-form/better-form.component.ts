import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent {
  calcForm: FormGroup = new FormGroup(
    {
      "fieldOne": new FormControl("0"),
      "fieldTwo": new FormControl("0")
    }
  );
  message: string = "足し算しましょう";


  getFieldOne() {
    return this.calcForm.get("fieldOne");
  }

  getFieldTwo() {
    return this.calcForm.get("fieldTwo");
  }

  addAnyway() {
    let text1: string = this.getFieldOne()?.value;
    let text2: string = this.getFieldTwo()?.value;
    let result: string = "";

    //オペランドに文字が含まれていれば（各オペランドが数字でなければ）文字列連結する
    if(Number.isNaN(Number(text1)) || Number.isNaN(Number(text2))) {
      result = text1 + text2;
    }
    //各オペランドが数字であれば足し算する
    else {
      result = `${text1}+${text2}=${Number(text1)+Number(text2)}`;
    }

    this.message = result;
  }

}
