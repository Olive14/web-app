import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
  result:string = "足し算をします";
  text1!:string;
  text2!:string;

  //CALCボタンをclickしたときにコールされる
  addShow():void {
    let calcRecult:string = "正しい値を入力してください"

    //テキストボックスに入力された文字列を数字に変換する
    let num1:number = Number(this.text1);
    let num2:number = Number(this.text2);
    
    //各オペランドが数字であれば（NaN：Not a Number  でなければ）計算する
    if(!Number.isNaN(num1) && !Number.isNaN(num2)) {
      calcRecult = `${num1} + ${num2} = ${num1 + num2}`;
    }
    
    this.result = calcRecult;
  }
}
